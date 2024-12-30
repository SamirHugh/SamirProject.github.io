# Samir Robinson-Hugh, sdr332, Lab Section: 061

var t, h, g, v
# This function represents the height changing until reaching 0 over a period of time.
# Any function that uses iprint is being used to print integers and any function using sprint is to print strings.(Said this early on since there are multiple uses of this function later on through code)
fun cycle() {
	if (.h >= 0 ) {
		iprint(.t)
		sprint(":")
		iprint (.h) 
		sprint ("\n")
		t : .t + 1
		calc() # The calc function calculates the height over a given time until the height returns to 0. 
		cycle() # The cycle function works as a loop for each time the height returns to 0. 
	}

	return 0
}
# This is the formula being used to calculate the height
fun calc() {
	h : ((.g/2) * pow(.t, 2)) + (.v * .t) 
}
# This calculates the power which is being used inside of the calc function above ^.
fun pow(a, b) {
	var r
	r : 1
# This creates a loop until that will run until b is either equal or less than 0 and thn the loop will end.
	loop {
		until .b <= 0
		r : .r * .a # r is assigned a value that will mutiply it. 
		b : .b - 1 # B is assigned a value which subtracts it by one each time it is ran through the loop.
	}

	return .r # This function returns the value of total power of the ball being throw which is then recorded as "r". 
}
# This funtion is used to initialize all the variables being used. 
fun init() {
	var ui # Ui is being used the user's input when entered, which is then recorded as the v which represents the initial velocity. 

	ui : iread("Enter an initial velocity\n") # This will be the first statment to printed out when ./lab7 is read, but I added in the "\n" into the text so that you arent typying directly next to the text. It as well sets the ui value based upon whichever integer is placed into the input. 

	t : 0 # T is the time
	h : 0 # H represents the height 
	v : .ui # V is representing the User Input which is the initial velocity. 
	g : -10 # G represent the gravity on the ball when thrown into the air, and since gravity is a downwards force it's integer will be a negative. 
	sprint("T : Y")
	sprint("\n")

	cycle()
}
