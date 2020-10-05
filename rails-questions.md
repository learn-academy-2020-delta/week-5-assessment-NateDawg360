# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb, or action, we send when someone inputs a request in the url calling on a method from our controller.
library - this is the address of the controller
:id - this is the key holding the value or method desired
book - addresses the location of the file
show - is the method key we are calling


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

first: rails generate migration add_key

then create command to add a key, or column → add_key :users, :first_name, :string for example.

then rails db:migrate

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string


5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

validates_presence_of is the validation command to make sure fields are not left nill.

6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

rails generate model Name_of_App collumn:element generates a model for us.  The naming convention is that if this model has other models that belong to it, it is referred to singular.  If the model belongs to another model, it is plural.
