# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model-View-Controller.  Models store types of data that we wish to access as we build an app.  View is a whole process of being able to connect the back end of our app and display it on a browser.  Controller carries logic that we wish to use of carrying out actions.

  Researched answer: Popular programming languages like JavaScript, Python, Ruby, PHP, Java, C#, and Swift use MVC frameworks.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD is defined as a structure of principles of what you want your app to do.

  Researched answer:  couldn't remember off the top of my head but CRUD stands for Create, Read, Update, Destroy.  Create is a principle where you had logic that can start or create a program on the user end.  Read means that program is displayed.  Update means you can edit that program so you the user can always have access or manipulate that program while its running.  Destroy ends the programs tasks, and can invlude the action of deleting actions run by the program.



3. What is a migration? Why would you use one?

  Your answer: Rails migration allows you to make changes to your database schema.  It allows you to access the blueprints of your database and keeps things throughout your program synchronized with those changes.

  Researched answer: This is a huge update vs how programmers used to have to write schema modifications in pure SQL.


4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: My guess would be that the model of Computer belongs to the Person model.  A Person can have many Computers, and those computers can hold foreign keys which are columns we can creating using migration.

  Researched answer:  Based on what I've searched, it's also possible the reason there is a model for Person and Computer could be to store information of purchasing or selling, blueprints needed to start a business, or maybe even account log in information.

5. What is object-relational mapping?

  Your answer: Object-Relational Mapping helps make associations between two incompatible data nodules that are needed to make the system function.

  Researched answer: Programmers can construct their own ORM tools.



6. What is a gem?

  Your answer: Gems are packages that can be installed into Ruby on Rails

  Researched answer: RubyGems is managed by ruby and provides a standard format for distributing Ruby programs.



7. Why is it important to have validations in your application?

  Your answer: It helps manage rules and principles that are needed for the program to continue running.  It also is a way to set standards for security purposes, such as creating character rules and rules for symbols for a user log in account to be created.

  Researched answer:  I searched more on gems, and found out all gems have the same basic structure organization.  This is it: % tree freewill
freewill/
├── bin/
│   └── freewill
├── lib/
│   └── freewill.rb
├── test/
│   └── test_freewill.rb
├── README
├── Rakefile
└── freewill.gemspec



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- JSON
- API
- Endpoints
- Strong params
