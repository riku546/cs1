class BodyShape:
    def __init__(self , h , w) -> None:
        self.height = h
        self.weight = w

    def is_taller_than(self , other):
        if self.height > other.height:
            return True
        else:
            return False
        
taro = BodyShape(170.0, 60.0)
hanako = BodyShape(160.0, 50.0)
print(hanako.height)
print(taro.is_taller_than(hanako))