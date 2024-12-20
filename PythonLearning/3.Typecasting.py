#Typecasting is the process of converting a variable of one date type to another example: str() --> int()

full_name = "Samir Hugh"
age = 18
Cash_On_Hand = 56.35
Computer_Science_Major = True

print(type(full_name))
print(type(age))
print(type(Cash_On_Hand))
print(type(Computer_Science_Major))

print("---------------------------")

gpa = int(Cash_On_Hand) #It will round the decimal to greatest whole number
print(gpa)

print("---------------------------")

age = float(age)
print(age)

print("---------------------------")

age = str(age)
print(age)

print("---------------------------")

full_name = bool(full_name) # In this case if someone inputs nothing would be the only time that the output would be false
print(full_name)

