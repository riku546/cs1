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

def formatter(value):
    count = 0
    result_list = []
    result_string = ""
    str_value = str(value)
    
    for i in range(len(str_value) , 0 , -1):
        count +=1
        result_list.append(str_value[i - 1])
        if(count == 3):
            result_list.append(",")
            count = 0
    print(result_list)            

    for s in range(len(result_list) -1 , -1 , -1):
        result_string += result_list[s]

    return result_string


print(formatter(1234567))


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

# import re


# def to_minutes(t1 , t2):
#     hour ,  minutes = re.split(':' , t1)
#     hour2 , minutes2  = re.split(':' , t2)

#     result_hour = int(hour2) - int(hour)
#     result_minutes = int(minutes2) - int(minutes)

#     return  (result_hour * 60 ) + result_minutes


# print(to_minutes("1:30" , "6:30"))


# number = 1234567890
# formatted_number = "{:,}".format(number)
# print(formatted_number)


