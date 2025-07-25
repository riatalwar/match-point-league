export type Leagues = {
    id: number;
    city: string;
    sport: string;
    season: string;
    start_date: string;
    end_date: string;
}

export type LeagueParticipants = {
    id: number;
    name: string;
    league_id: number;
    user_id: number;
    wins: number;
    losses: number;
    rating: number;
}

// Sample leagues data
export const leaguesList: Leagues[] = [
    // Tennis Leagues
    {
        id: 1,
        city: "Austin",
        sport: "Tennis",
        season: "Spring 2024",
        start_date: "2024-03-01",
        end_date: "2024-05-31"
    },
    {
        id: 2,
        city: "Dallas",
        sport: "Tennis",
        season: "Spring 2024",
        start_date: "2024-03-15",
        end_date: "2024-06-15"
    },
    {
        id: 3,
        city: "Houston",
        sport: "Tennis",
        season: "Summer 2024",
        start_date: "2024-06-01",
        end_date: "2024-08-31"
    },
    {
        id: 4,
        city: "San Antonio",
        sport: "Tennis",
        season: "Fall 2024",
        start_date: "2024-09-01",
        end_date: "2024-11-30"
    },
    {
        id: 5,
        city: "Austin",
        sport: "Tennis",
        season: "Winter 2024",
        start_date: "2024-12-01",
        end_date: "2025-02-28"
    },
    
    // Pickleball Leagues
    {
        id: 6,
        city: "Austin",
        sport: "Pickleball",
        season: "Spring 2024",
        start_date: "2024-03-10",
        end_date: "2024-06-10"
    },
    {
        id: 7,
        city: "Dallas",
        sport: "Pickleball",
        season: "Spring 2024",
        start_date: "2024-03-20",
        end_date: "2024-06-20"
    },
    {
        id: 8,
        city: "Houston",
        sport: "Pickleball",
        season: "Summer 2024",
        start_date: "2024-06-15",
        end_date: "2024-09-15"
    },
    {
        id: 9,
        city: "San Antonio",
        sport: "Pickleball",
        season: "Fall 2024",
        start_date: "2024-09-15",
        end_date: "2024-12-15"
    },
    {
        id: 10,
        city: "Fort Worth",
        sport: "Pickleball",
        season: "Winter 2024",
        start_date: "2024-12-15",
        end_date: "2025-03-15"
    },
    {
        id: 11,
        city: "Austin",
        sport: "Pickleball",
        season: "Summer 2024",
        start_date: "2024-06-01",
        end_date: "2024-09-01"
    },
    {
        id: 12,
        city: "Dallas",
        sport: "Pickleball",
        season: "Fall 2024",
        start_date: "2024-09-01",
        end_date: "2024-12-01"
    }
];

// Sample league participants data
export const leagueParticipantsList: LeagueParticipants[] = [
    // Austin Spring 2024 League (id: 1)
    {
        id: 1,
        name: "Sarah Johnson",
        league_id: 1,
        user_id: 101,
        wins: 8,
        losses: 2,
        rating: 4.2
    },
    {
        id: 2,
        name: "Mike Rodriguez",
        league_id: 1,
        user_id: 102,
        wins: 6,
        losses: 4,
        rating: 3.8
    },
    {
        id: 3,
        name: "Emily Chen",
        league_id: 1,
        user_id: 103,
        wins: 7,
        losses: 3,
        rating: 4.0
    },
    {
        id: 4,
        name: "David Thompson",
        league_id: 1,
        user_id: 104,
        wins: 5,
        losses: 5,
        rating: 3.5
    },
    {
        id: 5,
        name: "Lisa Martinez",
        league_id: 1,
        user_id: 105,
        wins: 9,
        losses: 1,
        rating: 4.5
    },
    
    // Dallas Spring 2024 League (id: 2)
    {
        id: 6,
        name: "James Wilson",
        league_id: 2,
        user_id: 201,
        wins: 7,
        losses: 3,
        rating: 4.1
    },
    {
        id: 7,
        name: "Maria Garcia",
        league_id: 2,
        user_id: 202,
        wins: 5,
        losses: 5,
        rating: 3.6
    },
    {
        id: 8,
        name: "Robert Davis",
        league_id: 2,
        user_id: 203,
        wins: 8,
        losses: 2,
        rating: 4.3
    },
    {
        id: 9,
        name: "Jennifer Lee",
        league_id: 2,
        user_id: 204,
        wins: 4,
        losses: 6,
        rating: 3.2
    },
    {
        id: 10,
        name: "Christopher Brown",
        league_id: 2,
        user_id: 205,
        wins: 6,
        losses: 4,
        rating: 3.9
    },
    
    // Houston Summer 2024 League (id: 3)
    {
        id: 11,
        name: "Amanda Taylor",
        league_id: 3,
        user_id: 301,
        wins: 6,
        losses: 4,
        rating: 3.7
    },
    {
        id: 12,
        name: "Kevin Anderson",
        league_id: 3,
        user_id: 302,
        wins: 8,
        losses: 2,
        rating: 4.4
    },
    {
        id: 13,
        name: "Rachel White",
        league_id: 3,
        user_id: 303,
        wins: 5,
        losses: 5,
        rating: 3.4
    },
    {
        id: 14,
        name: "Thomas Jackson",
        league_id: 3,
        user_id: 304,
        wins: 7,
        losses: 3,
        rating: 4.0
    },
    {
        id: 15,
        name: "Nicole Harris",
        league_id: 3,
        user_id: 305,
        wins: 4,
        losses: 6,
        rating: 3.1
    },
    
    // San Antonio Fall 2024 League (id: 4)
    {
        id: 16,
        name: "Daniel Clark",
        league_id: 4,
        user_id: 401,
        wins: 7,
        losses: 3,
        rating: 4.1
    },
    {
        id: 17,
        name: "Jessica Lewis",
        league_id: 4,
        user_id: 402,
        wins: 5,
        losses: 5,
        rating: 3.5
    },
    {
        id: 18,
        name: "Matthew Hall",
        league_id: 4,
        user_id: 403,
        wins: 6,
        losses: 4,
        rating: 3.8
    },
    {
        id: 19,
        name: "Ashley Young",
        league_id: 4,
        user_id: 404,
        wins: 8,
        losses: 2,
        rating: 4.2
    },
    {
        id: 20,
        name: "Ryan King",
        league_id: 4,
        user_id: 405,
        wins: 4,
        losses: 6,
        rating: 3.3
    },
    
    // Austin Winter 2024 League (id: 5)
    {
        id: 21,
        name: "Stephanie Wright",
        league_id: 5,
        user_id: 501,
        wins: 6,
        losses: 4,
        rating: 3.9
    },
    {
        id: 22,
        name: "Michael Scott",
        league_id: 5,
        user_id: 502,
        wins: 7,
        losses: 3,
        rating: 4.0
    },
    {
        id: 23,
        name: "Lauren Green",
        league_id: 5,
        user_id: 503,
        wins: 5,
        losses: 5,
        rating: 3.6
    },
    {
        id: 24,
        name: "Jonathan Adams",
        league_id: 5,
        user_id: 504,
        wins: 8,
        losses: 2,
        rating: 4.3
    },
    {
        id: 25,
        name: "Michelle Baker",
        league_id: 5,
        user_id: 505,
        wins: 4,
        losses: 6,
        rating: 3.2
    },
    
    // Pickleball Participants
    
    // Austin Spring 2024 Pickleball League (id: 6)
    {
        id: 26,
        name: "Alex Rivera",
        league_id: 6,
        user_id: 601,
        wins: 10,
        losses: 2,
        rating: 4.6
    },
    {
        id: 27,
        name: "Sofia Patel",
        league_id: 6,
        user_id: 602,
        wins: 8,
        losses: 4,
        rating: 4.1
    },
    {
        id: 28,
        name: "Carlos Mendez",
        league_id: 6,
        user_id: 603,
        wins: 7,
        losses: 5,
        rating: 3.9
    },
    {
        id: 29,
        name: "Emma Wilson",
        league_id: 6,
        user_id: 604,
        wins: 6,
        losses: 6,
        rating: 3.7
    },
    {
        id: 30,
        name: "Marcus Johnson",
        league_id: 6,
        user_id: 605,
        wins: 9,
        losses: 3,
        rating: 4.3
    },
    
    // Dallas Spring 2024 Pickleball League (id: 7)
    {
        id: 31,
        name: "Isabella Torres",
        league_id: 7,
        user_id: 701,
        wins: 8,
        losses: 4,
        rating: 4.2
    },
    {
        id: 32,
        name: "Lucas Anderson",
        league_id: 7,
        user_id: 702,
        wins: 6,
        losses: 6,
        rating: 3.8
    },
    {
        id: 33,
        name: "Ava Thompson",
        league_id: 7,
        user_id: 703,
        wins: 9,
        losses: 3,
        rating: 4.4
    },
    {
        id: 34,
        name: "Diego Rodriguez",
        league_id: 7,
        user_id: 704,
        wins: 5,
        losses: 7,
        rating: 3.5
    },
    {
        id: 35,
        name: "Zoe Chen",
        league_id: 7,
        user_id: 705,
        wins: 7,
        losses: 5,
        rating: 4.0
    },
    
    // Houston Summer 2024 Pickleball League (id: 8)
    {
        id: 36,
        name: "Ethan Davis",
        league_id: 8,
        user_id: 801,
        wins: 7,
        losses: 5,
        rating: 3.9
    },
    {
        id: 37,
        name: "Mia Garcia",
        league_id: 8,
        user_id: 802,
        wins: 10,
        losses: 2,
        rating: 4.5
    },
    {
        id: 38,
        name: "Noah Martinez",
        league_id: 8,
        user_id: 803,
        wins: 6,
        losses: 6,
        rating: 3.6
    },
    {
        id: 39,
        name: "Lily Brown",
        league_id: 8,
        user_id: 804,
        wins: 8,
        losses: 4,
        rating: 4.1
    },
    {
        id: 40,
        name: "Owen Lee",
        league_id: 8,
        user_id: 805,
        wins: 5,
        losses: 7,
        rating: 3.4
    },
    
    // San Antonio Fall 2024 Pickleball League (id: 9)
    {
        id: 41,
        name: "Chloe White",
        league_id: 9,
        user_id: 901,
        wins: 8,
        losses: 4,
        rating: 4.2
    },
    {
        id: 42,
        name: "Jackson Clark",
        league_id: 9,
        user_id: 902,
        wins: 6,
        losses: 6,
        rating: 3.7
    },
    {
        id: 43,
        name: "Grace Lewis",
        league_id: 9,
        user_id: 903,
        wins: 9,
        losses: 3,
        rating: 4.3
    },
    {
        id: 44,
        name: "Henry Hall",
        league_id: 9,
        user_id: 904,
        wins: 7,
        losses: 5,
        rating: 3.9
    },
    {
        id: 45,
        name: "Scarlett Young",
        league_id: 9,
        user_id: 905,
        wins: 5,
        losses: 7,
        rating: 3.5
    },
    
    // Fort Worth Winter 2024 Pickleball League (id: 10)
    {
        id: 46,
        name: "Sebastian King",
        league_id: 10,
        user_id: 1001,
        wins: 7,
        losses: 5,
        rating: 3.8
    },
    {
        id: 47,
        name: "Victoria Adams",
        league_id: 10,
        user_id: 1002,
        wins: 8,
        losses: 4,
        rating: 4.1
    },
    {
        id: 48,
        name: "Gabriel Baker",
        league_id: 10,
        user_id: 1003,
        wins: 6,
        losses: 6,
        rating: 3.6
    },
    {
        id: 49,
        name: "Penelope Scott",
        league_id: 10,
        user_id: 1004,
        wins: 9,
        losses: 3,
        rating: 4.4
    },
    {
        id: 50,
        name: "Adrian Green",
        league_id: 10,
        user_id: 1005,
        wins: 5,
        losses: 7,
        rating: 3.3
    },
    
    // Austin Summer 2024 Pickleball League (id: 11)
    {
        id: 51,
        name: "Nora Wright",
        league_id: 11,
        user_id: 1101,
        wins: 8,
        losses: 4,
        rating: 4.0
    },
    {
        id: 52,
        name: "Leo Taylor",
        league_id: 11,
        user_id: 1102,
        wins: 7,
        losses: 5,
        rating: 3.8
    },
    {
        id: 53,
        name: "Hazel Jackson",
        league_id: 11,
        user_id: 1103,
        wins: 6,
        losses: 6,
        rating: 3.6
    },
    {
        id: 54,
        name: "Felix Harris",
        league_id: 11,
        user_id: 1104,
        wins: 9,
        losses: 3,
        rating: 4.2
    },
    {
        id: 55,
        name: "Ruby Cooper",
        league_id: 11,
        user_id: 1105,
        wins: 5,
        losses: 7,
        rating: 3.4
    },
    
    // Dallas Fall 2024 Pickleball League (id: 12)
    {
        id: 56,
        name: "Miles Richardson",
        league_id: 12,
        user_id: 1201,
        wins: 7,
        losses: 5,
        rating: 3.9
    },
    {
        id: 57,
        name: "Stella Cox",
        league_id: 12,
        user_id: 1202,
        wins: 8,
        losses: 4,
        rating: 4.1
    },
    {
        id: 58,
        name: "Theodore Ward",
        league_id: 12,
        user_id: 1203,
        wins: 6,
        losses: 6,
        rating: 3.7
    },
    {
        id: 59,
        name: "Luna Morris",
        league_id: 12,
        user_id: 1204,
        wins: 9,
        losses: 3,
        rating: 4.3
    },
    {
        id: 60,
        name: "Oliver Turner",
        league_id: 12,
        user_id: 1205,
        wins: 5,
        losses: 7,
        rating: 3.5
    }
];


