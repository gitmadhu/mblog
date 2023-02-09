# How Webhooks are different from REST API calls in sap commerce cloud
In SAP Commerce Cloud, both webhooks and REST APIs can be used to integrate with external systems and exchange data. However, there are some key differences between the two:

- Purpose: Webhooks are designed to notify external systems when specific events occur within SAP Commerce Cloud, while REST APIs are designed to allow external systems to retrieve data from, or make updates to, SAP Commerce Cloud.

- Triggering: Webhooks are triggered automatically by events within SAP Commerce Cloud, while REST APIs must be explicitly called by the external system.

- Data format: Webhooks typically send data in a simple format, such as JSON or XML, while REST APIs often return data in a more complex format, such as a resource-oriented format.

- Data transfer: Webhooks are typically used for small amounts of data, such as a notification that an order has been placed, while REST APIs are often used for larger amounts of data, such as retrieving a customer's complete order history.

- Latency: Webhooks are often faster and have lower latency than REST APIs, since they do not need to wait for a request from the external system.

- Security: Webhooks are often less secure than REST APIs, since they are triggered automatically and typically send data in a simple format. REST APIs, on the other hand, typically require authentication and authorization, and often return data in a more secure format.

Overall, the choice between webhooks and REST APIs will depend on the specific requirements of your integration, such as the amount of data being transferred, the frequency of the transfers, and the security requirements.

