    let Arry_mark=[1,2,3,4,5,6,7]
    let read = 200
    let writing = 250
    let listening = 300
    let SBA = 75
    let speaking = 75
    let time = 0
    let marks
    for(let i = 0;i<=Arry_mark.length;i++){
        for(let x = 0;x<=Arry_mark.length;x++){
            for(let z = 0;z<=Arry_mark.length;z++){
                for(let y = 0;y<=Arry_mark.length;y++){
                    for(let u = 0;u<=Arry_mark.length;u++){
                        if(read*Arry_mark[i]+writing*Arry_mark[x]+listening*Arry_mark[z]+SBA*Arry_mark[y]+speaking*Arry_mark[u]>3000 && read*Arry_mark[i]+writing*Arry_mark[x]+listening*Arry_mark[z]+SBA*Arry_mark[y]+speaking*Arry_mark[u]<5000 && 
                            listening*Arry_mark[z]<1200 && read*Arry_mark[i]<=1000 && writing*Arry_mark[x]<1500 && speaking*Arry_mark[y]<375 && SBA*Arry_mark[u]<375){
                            marks = read*Arry_mark[i]+writing*Arry_mark[x]+listening*Arry_mark[z]+SBA*Arry_mark[y]+speaking*Arry_mark[u]
                            marks.toString()
                            let work_Arry = []
                            time=time+1
                            work_Arry.push(Arry_mark[i],Arry_mark[x],Arry_mark[z],Arry_mark[y],Arry_mark[u],marks[0])
                            document.write(work_Arry)
                            document.write("<br>")
                            document.write(time)
                            document.write("<br>")
                        }
                    }
                }
            }
        }
    }
2,5,3,3,4,
1
2,5,3,4,3,
2
2,5,3,4,4,
3
3,4,3,3,4,
4
3,4,3,4,3,
5
3,4,3,4,4,
6
3,5,2,4,4,
7
3,5,3,1,3,
8
3,5,3,1,4,
9
3,5,3,2,2,
10
3,5,3,2,3,
11
3,5,3,2,4,
12
3,5,3,3,1,
13
3,5,3,3,2,
14
3,5,3,3,3,
15
3,5,3,3,4,
16
3,5,3,4,1,
17
3,5,3,4,2,
18
3,5,3,4,3,
19
3,5,3,4,4,
20
4,3,3,4,4,
21
4,4,3,1,4,
22
4,4,3,2,3,
23
4,4,3,2,4,
24
4,4,3,3,2,
25
4,4,3,3,3,
26
4,4,3,3,4,
27
4,4,3,4,1,
28
4,4,3,4,2,
29
4,4,3,4,3,
30
4,4,3,4,4,
31
4,5,2,1,4,
32
4,5,2,2,3,
33
4,5,2,2,4,
34
4,5,2,3,2,
35
4,5,2,3,3,
36
4,5,2,3,4,
37
4,5,2,4,1,
38
4,5,2,4,2,
39
4,5,2,4,3,
40
4,5,2,4,4,
41
4,5,3,1,1,
42
4,5,3,1,2,
43
4,5,3,1,3,
44
4,5,3,1,4,
45
4,5,3,2,1,
46
4,5,3,2,2,
47
4,5,3,2,3,
48
4,5,3,2,4,
49
4,5,3,3,1,
50
4,5,3,3,2,
51
4,5,3,3,3,
52
4,5,3,3,4,
53
4,5,3,4,1,
54
4,5,3,4,2,
55
4,5,3,4,3,
56
4,5,3,4,4,
57
5,3,3,1,4,
58
5,3,3,2,3,
59
5,3,3,2,4,
60
5,3,3,3,2,
61
5,3,3,3,3,
62
5,3,3,3,4,
63
5,3,3,4,1,
64
5,3,3,4,2,
65
5,3,3,4,3,
66
5,3,3,4,4,
67
5,4,2,2,4,
68
5,4,2,3,3,
69
5,4,2,3,4,
70
5,4,2,4,2,
71
5,4,2,4,3,
72
5,4,2,4,4,
73
5,4,3,1,1,
74
5,4,3,1,2,
75
5,4,3,1,3,
76
5,4,3,1,4,
77
5,4,3,2,1,
78
5,4,3,2,2,
79
5,4,3,2,3,
80
5,4,3,2,4,
81
5,4,3,3,1,
82
5,4,3,3,2,
83
5,4,3,3,3,
84
5,4,3,3,4,
85
5,4,3,4,1,
86
5,4,3,4,2,
87
5,4,3,4,3,
88
5,4,3,4,4,
89
5,5,1,3,4,
90
5,5,1,4,3,
91
5,5,1,4,4,
92
5,5,2,1,2,
93
5,5,2,1,3,
94
5,5,2,1,4,
95
5,5,2,2,1,
96
5,5,2,2,2,
97
5,5,2,2,3,
98
5,5,2,2,4,
99
5,5,2,3,1,
100
5,5,2,3,2,
101
5,5,2,3,3,
102
5,5,2,3,4,
103
5,5,2,4,1,
104
5,5,2,4,2,
105
5,5,2,4,3,
106
5,5,2,4,4,
107
5,5,3,1,1,
108
5,5,3,1,2,
109
5,5,3,1,3,
110
5,5,3,1,4,
111
5,5,3,2,1,
112
5,5,3,2,2,
113
5,5,3,2,3,
114
5,5,3,2,4,
115
5,5,3,3,1,
116
5,5,3,3,2,
117
5,5,3,3,3,
118
5,5,3,3,4,
119
5,5,3,4,1,
120
5,5,3,4,2,
121
5,5,3,4,3,
122
5,5,3,4,4,
123
