# Variables are a container for a value that can either be a string, integer, float, or boolean. A variable behaves as if it was the value it contains
#Strings
full_name = "Samir Hugh"
food = "Chicken Sandwich"
email = "samirhugh@gmail.com"

# Now if you wish to print a statement that says something such as "Hello first_name" you will use 'print(f"Hello {first_name}")'
print(f"Hello {full_name}")
print(f"Your favoirte food is {food}")
print(f"Your email is: {email}")

#Integers
age = 18
quantity = 3 
num_of_customer = 13

print(f"You are {age} years old!")
print(f"You are attempting to purhcase {quantity} cases of liquor")
print(f"There are {num_of_customer} customers in the store currently")

#float

Checkings = 326.22
Savings = 988.34
Cash = 56.35

print(f"I currently have {Checkings} inside of my checking account")
print(f"I currently have {Savings} inside of my savings account")
print(f"I only have {Cash} in cash with me")

#Boolean 

Drexel_Student = True
Computer_Science_Major = True
Kelly_Hall_Resident = False

print(f"Are you currently a DrexelU Student?: {Drexel_Student}")
print(f"Are you majoring in computer science?: {Computer_Science_Major}")
print(f"Is your current residentential hall Kelly?: {Kelly_Hall_Resident}")

# If statement using boolean examples:
if Drexel_Student:
    print("Go Dragons!")
else: 
    print("BOOOOOO DRAGONS ON TOP!")

if Computer_Science_Major:
    print("Computing and Informatics College is the best college!")
else: 
    print("Your Missing out on :(")

if Kelly_Hall_Resident:
    print("Take the stairs!")
else: 
    print("At least your elevator works!")
