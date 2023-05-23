import React, { useState, useEffect } from "react";
import { AWSSNS } from "aws-sdk";

const Awssns = () => {
  const [topicArn, setTopicArn] = useState("");
  const [subscriptionArn, setSubscriptionArn] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const client = new AWSSNS();
    client.subscribe({
      TopicArn: 'arn:aws:sns:ap-northeast-1:817029654747:vehicleStatusNo',
      Endpoint: "https://nextingo-dashbord-86244.web.app",
      Protocol: "http",
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        setSubscriptionArn(data.SubscriptionArn);
        setIsSubscribed(true);
      }
    });
  }, [topicArn]);

  const handleConfirmSubscription = () => {
    const client = new AWSSNS();
    client.confirmSubscription({
      SubscriptionArn: subscriptionArn,
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Subscription confirmed!");
      }
    });
  };

  return (
    <div>
      <h1>Confirm AWS SNS Subscription</h1>
      <input
        type="text"
        placeholder="Topic ARN"
        onChange={(e) => setTopicArn(e.target.value)}
      />
      <button onClick={handleConfirmSubscription}>Confirm Subscription</button>
      {isSubscribed && <h2>Subscription confirmed!</h2>}
    </div>
  );
};

export default Awssns;
