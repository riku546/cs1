class student:
  def __init__(self , name:str , age:int) -> None:
    self.name = name
    self.age = age
    self.list = []

class student_fn:
    def register(self , name:str , age:int , student)->None:
      student.list.append(name , age)

    def delete(self , name:str , age:int , student)->None:
      student.list.remove(name , age)
  
