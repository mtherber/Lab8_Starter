# Lab 8 - Starter
Mitchell Herbert

1. I choose option 1 (Github actions). This ensures that everyone can see the results of any unit tests so they know whether code is buggy before working with it. However, I would not say that option 2 isn't without merit - it helps to ensure that buggy code is never pushed to begin with.
2. No. End to end testing is meant for simulating "user actions from start to finish." The result of a function would be better tested using unit tests.
3. Probably not. Messaging is a complicated action which involves the user typing a message, clicking send, transmitting the message, receiving the message, and displaying the message. This is more than a single unit test can handle. However, you could unit test individual components of this message-sending process (e.g. test whether the "submit" function returns the right value).
4. Yes. This is the perfect use case for unit tests. A unit test could tell you whether the function that determines whether a message is too long returns the right value.