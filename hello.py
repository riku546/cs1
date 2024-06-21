# class Bank:
#     def __init__(self , account) -> None:
#         self.account = account


#     def withdraw(self , name , yen):
#         money = self.account[name]
#         if(money < yen):
#             return None
#         return money - yen
    

# bank = Bank({"bob":1234})
# print(bank.withdraw("bob",234))
# print(bank.withdraw("bob" , 9999))


# class Rectangle:
#     def __init__(self , w ,h) -> None:
#         self.width = w
#         self.height = h

#     def area(self):
#         return self.width * self.height
    


# r  = Rectangle(5,4)
# print(r.width)
# print(r.height)
# print(r.area())


# class Room:
#     def __init__(self , nm , ar) -> None:
#         self.name = nm
#         self.area = ar
    
#     def compare(self ,val):
#         if self.area > val:
#             return  f"> {val}"
#         elif self.area <= val:
#             return f"<= {val}" 

import numpy as np


class Point:
    def __init__(self , x , y) -> None:
        self.x = x
        self.y = y
        

    def distance(self ,object):
        p  = np.array([self.x , self.y])
        q = np.array([object.x , object.y])
        return np.linalg.norm(p - q)

