
# def get_email(xs):
#     return  [s + "@iniad.org" for s in xs if s[0:3] == "s1f"]


# in_s= ["iniad"  , "s1f10240046" , "s1" , "s"]
# print(get_email(in_s))


# def count_uid(xs):
#     return  len([s  for s in xs if s[0:3] == "s1f"])



# def exist21(xs):
#     return [any(s[0:7] == "s1f1021" for s in xs)]


# s = ["s1f10214444" , "s1f10224"]
# # print(s[0:8])
# print(exist21(s))

# gym = ["JPN" , "RUS" , "CHN" , "GBR" , "USA" , "BRA" , "GER" , "UKR"]

# # def gym_rank(s):
# #     for i , country in enumerate(gym):
# #         if s == country:
# #             return i + 1


# def gym_rank(s):
#     for i in range(len(gym)):
#         if s == gym[i]:
#             return i + 1
        
# print(gym_rank("USA"))


# sports = [ 'cricket', 'lacrosse', 'hockey', 'water_polo', 'kabaddi', 'tug_of_war' ] 
# n_players = [ 11, 10, 11, 7, 7, 8 ]


# # def sp_players(s):
# #     for players , sport in zip(n_players ,sports):
# #         if sport == s:
# #             return players



# def sp_players(s):
#     for i in range(len(n_players)):
#         if s == sports[i]:
#             return n_players[i]
        

# print(sp_players("hockey"))