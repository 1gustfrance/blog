import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wvwdtttxvscznbcvqmce.supabase.co/rest/v1/posts?select=id',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2d2R0dHR4dnNjem5iY3ZxbWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1Nzg5NzAsImV4cCI6MjAyNTE1NDk3MH0.PnTuZtFiaOz16LevMvvPZgC2Hb6Em6MHqMbVm41gIWw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2d2R0dHR4dnNjem5iY3ZxbWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1Nzg5NzAsImV4cCI6MjAyNTE1NDk3MH0.PnTuZtFiaOz16LevMvvPZgC2Hb6Em6MHqMbVm41gIWw"
    }
})