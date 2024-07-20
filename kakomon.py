

# def ch05(x):
#   if x % 5 == 0:
#     return "OK"
#   return "NG"

# ans = ch05(80)
# print(ans)
# print(ch05(23))
# print(ch05(35))
# print(ch05(51))



# def head2p(s):
#   return s.replace(s[0] , "p")


# ans = head2p('big')
# print(ans)
# print(head2p('apple'))
# print(head2p('pen'))
# print(head2p('cut'))
# print(head2p('orange'))


# def gt10(xs):
#    return sum([i for i in xs if i > 10])

# ans = gt10([3, 19, 11])
# print(ans)
# print(gt10([15, 7, 6, 21]))
# print(gt10([7, 11, 32]))
# print(gt10([16, 24, 22]))



# class Counter:
#   def __init__(self , n):
#     self.count = n

#   def increment(self):
#     self.count += 1
  
#   def reset(self):
#     self.count = 0


# c1 = Counter(5)

# for _ in range(3):
#     c1.increment()
#     print(c1.count)

# c1.reset()
# print(c1.count)

# import re

# def cont(s):
#   if re.search( "\d{3}" , s):
#     return True
#   return False


# s1 = "abc54abc"
# s2 = "abc861xyz"   # "861" の部分が該当
# s3 = "abc92def85477xyz"   # "85477" の部分が該当
# s4 = "abc15def41gh7"

# print(cont(s1))
# print(cont(s2))
# print(cont(s3))
# r = cont(s4)
# print(r)



