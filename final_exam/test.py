# def ch4(s:str):
#     if len(s) == 4:
#         return "OK"
#     else:
#         return "NG"
    
# ans = ch4('tree')
# print(ans)
# print(ch4('apple'))
# print(ch4('tomato'))
# print(ch4('book'))
# print(ch4('fun'))


# def cnta(lis):
#     result = 0
#     for s in lis:
#         if s[0] == "a":
#             result+=1
#     return result


# ans = cnta(['apple', 'pen', 'banana'])
# print(ans)
# print(cnta(['tree', 'blue', 'peach']))
# print(cnta(['ant', 'active']))
# print(cnta(['circle', 'arm', 'accept', 'habit', 'apple']))




# def ex100(nums):
#     newNums = [i for i in nums if i >= 100]
#     if len(newNums):
#         return "OK"
#     else:
#         return "NG"
    

# ans = ex100([75, 80, 100, 95])
# print(ans)
# print(ex100([15, 60, 80, 55]))
# print(ex100([55, 35, 70, 58]))
# print(ex100([100, 100, 100, 100]))
# print(ex100([98, 100, 100, 100]))
# print(ex100([100, 90, 95, 100]))



# class Wallet:
#     def __init__(self , b) -> None:
#         self.balance = b


#     def deposit(self , amount):
#         self.balance += amount
        
    
#     def withdraw(self , amount):
#         if (self.balance - amount ) < 0:
#             return "NG"
#         else:
#             self.balance -= amount
#             return "OK"

# c1 = Wallet(0)

# c1.deposit(1000) # 1000円預け入れ
# print(c1.withdraw(700)) # 700円引き出し(成功し、残高は300になる)
# print(c1.withdraw(800)) # 800円引き出し(失敗するため、残高は変わらない)

# print(c1.balance) # 300円



# def abbrev(s):
#     flag = True
#     result = ""

#     for i in s:
#         if i == "{": 
#             flag = False

#         elif i == "}":
#             flag = True
#             continue


#         if flag: 
#             result += i
        
#     return result
            
        
# s1 = "abc{defgh}ijk"
# s2 = "abcde{123!abc?de}"
# s3 = "{}a{}bc{def}g{hij}"

# print(abbrev(s1))
# print(abbrev(s2))
# r = abbrev(s3)
# print(r)





