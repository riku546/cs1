# def binary_search(list , value):
#     right = 0
#     left = len(list) - 1

#     while right <= left:
#         mid = (left + right ) // 2
#         if list[mid] == value:
#             return mid
#         elif list[mid] > value:
#             left = mid - 1
#         elif list[mid] < value:
#             right = mid + 1



#     return -1

# def liner_search(list , value):
#     for i in range(len(list)):
#         if(list[i] == value):
#             return i
#     return -1




# list = [i for i in range(10 ** 8)]



# # print(binary_search( list, 200000))
# print(liner_search( list, 200000))



# s = '"I\'m here" , said Alice.\n but she was not there.'
# print(s)

# print("1\t3\t4")


# list = [1 ,2 ,3 ,4 ,5 ,6, 7, 8 , 9]

# def mult_table():
#     for i in list:
#         for r in range(1 , len(list) + 1):
#             print(f"{i * r}\t" , end="")
#         print()



# mult_table()

# def formatter(value):
#     count = 0
#     for i in range(len(str(value)) , -1 , -1):
#         count +=1
#         if(count % 3 == 0):



# formatter(1234567)


# import re


# s = "ret"

# if re.fullmatch('[A-Za-z]+',s):
#     print("error")



# import re 
# s = "1/4/2017"
# def us_to_bk(date):

#     date , month  , year= re.split('/' , s)
#     return f"{month}/{date}/{year}"

# print(us_to_bk(s))

