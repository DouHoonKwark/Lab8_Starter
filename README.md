# Lab 8 - Starter    
Dou    

1. Within a Github action that runs whenever code is pushed
- I would fit my automated tests in Github action. Automated tests are possibly written in long LoC and they can involve many different tests that can be hard to test manually. Also, it is not efficient to run it after all the development is done because it can cause a severe consequence. Therefore, by running a previously created Github action on every push, we can easily and efficiently use automated tests for our Recipe project development pipeline. 

2. no

3. No, I would not use a unit test to test the "message" feature of a messaging application. As described on Cons of unit testing, the suggested feature cannot be tested by unit testing. It is because writing a message and sending to another user involve more complex tasks and many different features, rather than simply dealing with message feature itself.

4. Yes, I would use a unit test to test the "max message length" feature of a message application. Simply checking the max message length can be easily done with a single unit testing. As described on Pros of unit testing, unit testing is the right fit for the "max message length" feature.