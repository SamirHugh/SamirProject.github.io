#Exercise One : Calculate the Area of a rectangular prism based upon bro codes rectangle

length = float(input("Enter in a Length: "))
width = float(input("Enter in a Width: "))
height = float(input("Enter in a Height: "))
# Remember to adress the varibale type by using typecasting so that the input from users returns as that variable for example in this case it will return floats which will then mutiply to give area
area = length * width * height

print(f"The area of your desired Rectangular Prism is: {area}cm³")