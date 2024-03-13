const routineData = {
    "CSE": {
        "1st": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "3rd": {
            "A": [
                ["Sunday", {text: "CHE-1262 G1[MMR][SS] (9:00-11:00) (Lab 118)", colspan: 2 }, { text: "CSE-1202 [DH][AAA] (11:00-1:00) (BCL)", colspan: 2 }, " ", " ", " ",],
                ["Monday", {text: "CHE-1262 G2 [TRP][RA] (9:00-11:00) (Lab 118)", colspan: 2 }, { text: "EEE-1232 [AF][ZM] (11:00-12:30) (ECL2)", colspan: 2 }, "MAT-1241[MMK](513)", " ", " ",],
                ["Tuesday", "CHE-1261[SP](414)","CSE-1203[URC](414)","EEE-1231[ZM](414)", "CSE-1201[AAA] (414)", " ", " "," ",],
                ["Wednesday", "CSE-1201[AAA] (514)","CHE-1261[SP](514)","CSE-1203[URC](513)", " ", " ", " "," ",],
                ["Thursday", "EEE-1231[ZM](511)","MAT-1241[MMK](512)"," ", " ", " ", " "," ",],
            ],

            "B": [
                ["Sunday", {text: "CSE-1202 [AAA][TAN] (9:00-11:00) (BCL)", colspan: 2 }, {text: "EEE-1232 [AF][ZM] (12:30-2:00) (ECL)", colspan: 2 }, " ", {text: "CHE-1262 G1 [TRP][SS] (3:00-5:00) (Lab 118)", colspan: 2 },],
                ["Monday", {text: "CHE-1262 G2 [SD][BA] (9:00-11:00) (Lab 118)", colspan: 2 }, "MAT-1241[MMK](311)", " ", " "," ", " ",],
                ["Tuesday", "CSE-1203[URC](514)","CSE-1201[AAA](411)","CHE-1261[SP](411)", "MAT-1241[MMK](413)", " ", " "," ",],
                ["Wednesday", "CSE-1203[URC](408)","EEE-1231[ZM](512)"," ", " ", " ", " "," ",],
                ["Thursday"," ", " ", " "," ","CSE-1201[AAA](413)","CHE-1261[SP](413)","EEE-1231[ZM](411)",],
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-0002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "4th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "5th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "6th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "7th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "8th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "9th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "10th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "11th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "12th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "1st": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },
    },

    "EEE": {
        "1st": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "3rd": {
            "A": [
                ["Sunday", {text: "CHE-1262 G1[MMR][SS] (9:00-11:00) (Lab 118)", colspan: 2 }, { text: "CSE-1202 [DH][AAA] (11:00-1:00) (BCL)", colspan: 2 }, " ", " ", " ",],
                ["Monday", {text: "CHE-1262 G2 [TRP][RA] (9:00-11:00) (Lab 118)", colspan: 2 }, { text: "EEE-1232 [AF][ZM] (11:00-12:30) (ECL2)", colspan: 2 }, "MAT-1241[MMK](513)", " ", " ",],
                ["Tuesday", "CHE-1261[SP](414)","CSE-1203[URC](414)","EEE-1231[ZM](414)", "CSE-1201[AAA] (414)", " ", " "," ",],
                ["Wednesday", "CSE-1201[AAA] (514)","CHE-1261[SP](514)","CSE-1203[URC](513)", " ", " ", " "," ",],
                ["Thursday", "EEE-1231[ZM](511)","MAT-1241[MMK](512)"," ", " ", " ", " "," ",],
            ],

            "B": [
                ["Sunday", {text: "CSE-1202 [AAA][TAN] (9:00-11:00) (BCL)", colspan: 2 }, {text: "EEE-1232 [AF][ZM] (12:30-2:00) (ECL)", colspan: 2 }, " ", {text: "CHE-1262 G1 [TRP][SS] (3:00-5:00) (Lab 118)", colspan: 2 },],
                ["Monday", {text: "CHE-1262 G2 [SD][BA] (9:00-11:00) (Lab 118)", colspan: 2 }, "MAT-1241[MMK](311)", " ", " "," ", " ",],
                ["Tuesday", "CSE-1203[URC](514)","CSE-1201[AAA](411)","CHE-1261[SP](411)", "MAT-1241[MMK](413)", " ", " "," ",],
                ["Wednesday", "CSE-1203[URC](408)","EEE-1231[ZM](512)"," ", " ", " ", " "," ",],
                ["Thursday"," ", " ", " "," ","CSE-1201[AAA](413)","CHE-1261[SP](413)","EEE-1231[ZM](411)",],
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-0002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "4th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "5th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "6th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "7th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "8th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "9th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "10th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "11th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "12th": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },

        "1st": {
            "A": [
                ["Sunday", " ", " ", " ", " ", "CSE-1101 [MH] (511)", "MAT-1141 [AH] (512)", "PHY-1151 [SHR] (512)"],
                ["Monday", " ", " ", " ", " ", " ", "MAT-1141 [AH] (414)", "PHY-1151 [SHR] (414)"],
                ["Tuesday", " ", " ", " ", { text: "PHY-1152 [SHR][AAA] (2:00-3:30) (ECL)", colspan: 2 }, { text: "EEE-1132 [SMT][ZM] (3:30-5:00) (ECL)", colspan: 2 }],
                ["Wednesday", " ", " ", " ", "ENG-1002 [SSR] (414)", "CSE-1101 [MH] (411)", "EEE-1131 [SMT] (411)", ""],
                ["Thursday", " ", " ", " ", "ENG-1002 [SSR] (313)", { text: "CSE-1102 [SY][MH] (2:00-4:00) (BCL)", colspan: 2 }, "EEE-1131 [SMT] (413)"]
            ],

            "B": [
                ["Sunday", " ", " ", " ", "MAT-1141 [AH] (514)", "EEE-1131 [SMT] (414)", "PHY-1151 [SHR] (414)", "CSE-1101 [MH] (414)"],
                ["Monday", {text: "EEE-1132 [SMT][ZM] (9:00-10:30) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (411) ", "CSE-1101 [MH] (414)", " ", " ", " ",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [SMT] (411)", { text: "CSE-1102 [SY][MH] (3:00-5:00) (BCL)", colspan: 2 }],
                ["Wednesday", "ENG-0002 [AYT] (512)", { text: "PHY-1152 [AAA][SHR] (10:30-12:00) (ECL2)", colspan: 2 }," ", " ", "", "",],
                ["Thursday", "PHY-1151 [SHR] (514)", "ENG-0002 [AYT] (514)", " ", " ", " ", " ", " "]
            ],

            "C": [
                ["Sunday", "CSE-1101 [TSK] (513)", "EEE-1131 [SMT] (513)", " ", " ", " ", " "," ",],
                ["Monday", " ", " ",{text: "EEE-1132 [SMT][RA] (ECL) (12:00-1:30)", colspan: 2 },"PHY-1151 [SHR] (511)","ENG-002 [AYT] (514)"," ",],
                ["Tuesday", " ", " "," ",{text: "CSE-1102 [MKD][MH] (12:00-2:00) (BCL)", colspan: 2 },"ENG-1002 [AYT] (408)","PHY-1151 [SHR] (313)",],
                ["Wednesday", " ", " ", " "," ", " ", "MAT-1141 [AH] (414)", "EEE-1131 [SMT] (414)"],
                ["Thursday", " ", " ", {text: "PHY-1152 [SHR][MH] (11:30-1:00) (ECL2)", colspan: 2 }, "MAT-1141 [AH] (513)","CSE-1101 [TSK] (514)",""]
            ],

            "D": [
                ["Sunday", " ", " ",{text: "PHY-1152 [SHR][MH] (12:00-1:30) (ECL2)", colspan: 2 },"ENG-002 [AYT] (413)","EEE-1131 [AU] (412)"," ",],
                ["Monday", " ", " "," ",{text: "CSE-1102 [TSK][AT] (12:30-2:30) (DL)", colspan: 2 },"MAT-1141 [MR] (411)","ENG-1002 [AYT] (411)",],
                ["Tuesday", " ", " "," ", " ", "EEE-1131 [AU] (414)", "CSE-1101 [RR] (413)", "PHY-1151 [RA] (413)"],
                ["Wednesday", " ", " "," ",{text: "EEE-1132 [ZM][PC] (1:00-2:30) (ECL2)", colspan: 2 },"PHY-1151 [RA] (413)"," ",],
                ["Thursday", "MAT-1141 [MR] (311)", "CSE-1101 [RR] (311)", " "," ", " ", " "," ",]
            ],

            "E": [
                ["Sunday", " ", " "," "," ","CSE-1101[RD](513)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 },],
                ["Monday", "MAT-1141[AKS](412)", "PHY-1151[TNR](412)","EEE-1131[NRP](408)",{text: "EEE-1132[MMR][SJR](3:30-5:00)(ECL2)", colspan: 2 }," "," ",],
                ["Tuesday", " ", " ",{text: "PHY-1152[SHR][SJR](12:00-1:30)(ECL2)", colspan: 2 },"ENG-1002[SSR](512) ","CSE-1101[RD](512)","",],
                ["Wednesday", " ", " ", " "," "," ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)",],
                ["Thursday", " ", " ", " ","PHY-1151[TNR](412)", "EEE-1131[NRP](412)"," "," ",],
            ],
        },
    },
};

export { routineData };