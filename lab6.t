fun init(){
    var num, sum, count
    sum : 0
    count : 0
# I have decided to use a loop because there if statemetnts there would be too many lines of code
    loop{
        num :iread("Enter a positive to continue, Enter a negative to halt") # This will be used to as a prompt for the user to type in the integer of choice whether that be negative or positive
        until .num<0 #This is used the check if the number is below zero then is associated with a negative, and if above associates it with a positive. 
        count: .count + 1 # Everytime a interger that is positive is inputed in the count will go up 1
        sum : .sum + .num # If the number is positive then the number will be added to a sum for example sum = 0 + Num = 7 sum = 7
    }

    if .count > 0 {
        sprint("Sum of positive numbers: ") # This is the wording that a user will see before the sum output.
        iprint(.sum) # Once a negative is inputted this is whats used to print the sum 
        sprint("\nThe amount of positive numbers: ") # This is the wording that a user will see before the count output.
        iprint(.count) # Once a negative is inputted this is whats used to print the count 
        sprint("\nThe average of the positive numbers: ") # This is the wording that a user will see before the average output.
        iprint(.sum / .count) # Once a negative is inputed this is whats used to print the average sum divided by the count
        sprint("\n") #Prevents the abc123@tux#:~$ appearing next to the average
    }
    else{
        sprint("No positive numbers exist. \n") # This will be printed if there if only a negative is inputted and there was no other positive numbers added to the "accumulator"
    }
    }

# The comments arent so much for the TA, but for me to understand what Ive done so that if I use something I can understand the reasoning of usage.