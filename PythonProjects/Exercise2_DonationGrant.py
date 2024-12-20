# Exercise 2 is based upon bro codes "Shopping Cart program" in my case I would like tot call this the donation grant.

Organization = input("What is the organization that you are wanting to donate to?: ") 
Donation_Amount = float(input("What would you like your donation amount to be?: "))
Monthly_ReDonation = int(input("How many months would you like to continue to donate this amount for?: ")) 
One_Time_Payment = Donation_Amount * Monthly_ReDonation
Monthly_Payment = Donation_Amount / Monthly_ReDonation

print(f"If you choose to do a one time payment your total will come to {One_Time_Payment}. ")
print(f"If you choose monthly payment you will be paying {Monthly_Payment}/mo for a total of {Monthly_ReDonation} months. ")
