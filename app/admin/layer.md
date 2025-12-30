app/
├── admin/
│   ├── layout.tsx                  # Admin shell (auth + sidebar)
│   ├── page.tsx                    # Admin dashboard
│
│   ├── users/
│   │   ├── page.tsx                # List users
│   │   ├── new/
│   │   │   └── page.tsx            # Create user
│   │   └── [id]/
│   │       └── page.tsx            # Edit / delete user
│
│   ├── trips/
│   │   ├── page.tsx                # List trips
│   │   ├── new/
│   │   │   └── page.tsx            # Create trip
│   │   └── [id]/
│   │       └── page.tsx            # Edit / delete trip
│
│   ├── media/
│   │   └── page.tsx                # Image upload & management
│
│   └── api/
│       ├── users/
│       │   ├── route.ts            # POST, GET
│       │   └── [id]/
│       │       └── route.ts        # GET, PUT, DELETE
│
│       ├── trips/
│       │   ├── route.ts            # Manual CRUD
│       │   ├── generate/
│       │   │   └── route.ts        # 🔥 Gemini AI → Generate Trip
│       │   └── [id]/
│       │       └── route.ts        # GET, PUT, DELETE
│
│       ├── ai/
│       │   ├── gemini/
│       │   │   └── route.ts        # (Optional) Shared Gemini endpoint
│
│       └── upload/
│           └── route.ts            # Image uploads
│
├── schemas/
│   └── trip.schema.ts              # Zod validation (AI + manual)
│
├── lib/
│   ├── gemini.ts                   # Gemini client wrapper
│   └── auth.ts                     # Admin auth helpers
│
├── types/
│   ├── trip.ts
│   └── user.ts
