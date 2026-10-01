// All page copy lives here so sections stay markup-only.
// Company names are fictional placeholders.

export const LEDGER = [
  { company: 'Northwind Health', role: 'Senior Product Analyst', where: 'Remote, US', resume: 'v4' },
  { company: 'Brightwave', role: 'Product Analyst II', where: 'Austin, TX', resume: 'v4' },
  { company: 'Kestrel Logistics', role: 'Analytics Lead', where: 'Chicago, IL', resume: 'v5' },
  { company: 'Fernhill Bank', role: 'Senior Data Analyst', where: 'New York, NY', resume: 'v4' },
  { company: 'Cobalt Robotics', role: 'Product Insights Manager', where: 'Remote, US', resume: 'v6' },
  { company: 'Juniper Labs', role: 'Growth Analyst', where: 'Seattle, WA', resume: 'v5' },
  { company: 'Orchard Commerce', role: 'Senior BI Analyst', where: 'Denver, CO', resume: 'v4' },
  { company: 'Atlas Mobility', role: 'Product Analytics Lead', where: 'Remote, US', resume: 'v6' },
  { company: 'Meridian Insurance', role: 'Decision Scientist', where: 'Boston, MA', resume: 'v5' },
  { company: 'Lumen Grid', role: 'Senior Product Analyst', where: 'San Jose, CA', resume: 'v4' },
];

export const STEPS = [
  {
    title: 'Tell us what you want',
    body: 'A 30-minute onboarding call with your assistant: target roles, salary floor, locations, visa needs, companies to avoid. We build your master resume from it.',
  },
  {
    title: 'Pick the jobs, or let us pick',
    body: 'Save roles from any job board with one click, or approve the shortlist your assistant sends each morning. Nothing goes out without matching your criteria.',
  },
  {
    title: 'We apply within 24 hours',
    body: 'Each application gets its own tailored resume and cover letter. You get a screenshot of every submitted form in your tracker, so you know it really went out.',
  },
];

export const TRAPS = [
  {
    bot: 'Bots only reach the easy portals. Workday, Greenhouse custom forms and big-company career sites with screening questions get skipped.',
    human: 'A person fills in any form a person can, including the ones with essays, assessments and dropdowns that break scripts.',
  },
  {
    bot: 'Bots spray the same resume at every listing. Volume goes up, callbacks stay flat.',
    human: 'Every 15 days your assistant reviews which roles called back and re-targets the next batch around what is working.',
  },
  {
    bot: 'You still babysit the tool: fixing errors, re-uploading files, checking what actually sent.',
    human: 'A dedicated assistant and an outcome manager share one chat with you. You spend your hours on networking and interviews.',
  },
];

export const RESULTS = [
  { value: '91%', label: 'of clients sign an offer within 90 days of starting' },
  { value: '44%', label: 'of those offers came from applications we sent' },
  { value: '6 → 2.5', label: 'months, the average search before and after Hirelane' },
  { value: '+$24k', label: 'median salary change from previous role' },
];

export const STORIES = [
  {
    name: 'Priya R.',
    role: 'Enterprise account executive',
    headline: 'Stuck for five months, signed in seven weeks',
    messages: [
      { from: 'them', text: 'Just got the written offer from Fernhill 🎉' },
      { from: 'them', text: 'That was one of the Thursday batch you sent, I never would have found it' },
      { from: 'us', text: 'Congratulations Priya! Want us to pause applications while you negotiate?' },
    ],
  },
  {
    name: 'Daniel M.',
    role: 'Project manager',
    headline: 'Laid off with no leads, 12 interviews in',
    messages: [
      { from: 'them', text: 'Recruiter call at 2, panel at Kestrel tomorrow, and Juniper wants a take-home' },
      { from: 'them', text: 'I genuinely do not have time to apply anywhere right now lol' },
      { from: 'us', text: "That's the idea. We sent 41 more this week, tracker is updated." },
    ],
  },
  {
    name: 'Aisha K.',
    role: 'Finance analyst',
    headline: 'From daily rejections to a 70% raise',
    messages: [
      { from: 'them', text: 'Accepted. 70% more than my last base.' },
      { from: 'them', text: 'The re-targeting after week 2 changed everything' },
      { from: 'us', text: 'You did the hard part in those interviews. Proud of you!' },
    ],
  },
];

export const TOOLS = [
  { name: 'Job board', body: 'Roles ranked against your profile, refreshed every few hours.' },
  { name: 'Application tracker', body: 'Every application, its tailored resume and the submission screenshot in one list.' },
  { name: 'Resume tailoring', body: 'Rewrites your bullets for a specific listing while keeping every claim true.' },
  { name: 'Resume builder', body: 'Templates that parse cleanly in applicant tracking systems.' },
  { name: 'Skills match', body: 'Shows which requirements in a listing your resume does not yet cover.' },
  { name: 'Browser extension', body: 'Save a job from LinkedIn, Indeed or any career page straight to your assistant.' },
];

export const COMPARE = {
  cols: ['Hirelane', 'On your own', 'Auto-apply bots', 'Staffing agency'],
  rows: [
    ['Tailored resume for each role', 'yes', 'slow', 'no', 'no'],
    ['Works on every application form', 'yes', 'yes', 'no', 'partial'],
    ['Proof each application was sent', 'yes', 'yes', 'partial', 'no'],
    ['Strategy reviews as results come in', 'yes', 'no', 'no', 'partial'],
    ['Applies to roles you choose', 'yes', 'yes', 'partial', 'no'],
    ['Hours you spend per week', '2', '20+', '6', '4'],
    ['Cost', 'from $299', 'free', '$30/mo', '15–25% of salary'],
  ],
};

export const PLANS = [
  {
    name: 'Starter',
    price: 299,
    apps: 250,
    pace: 'about 6 weeks',
    perks: ['Dedicated assistant', 'Tailored resume per application', 'Screenshot proof in your tracker', 'Shared chat, weekday replies'],
  },
  {
    name: 'Momentum',
    price: 499,
    apps: 500,
    pace: 'about 8 weeks',
    featured: true,
    perks: ['Everything in Starter', 'Cover letter per application', 'Strategy review every 15 days', 'Outcome manager in your chat'],
  },
  {
    name: 'Full search',
    price: 799,
    apps: 1000,
    pace: 'about 12 weeks',
    perks: ['Everything in Momentum', 'LinkedIn profile rewrite', 'Recruiter outreach on 50 roles', 'Interview prep session'],
  },
];

export const FAQ = [
  {
    q: 'What exactly does Hirelane do?',
    a: 'We assign you a trained job-search assistant who applies to jobs on your behalf. They tailor your resume and cover letter to each listing, fill in the application, and log a screenshot so you can check it. You keep full control over which companies and roles we apply to.',
  },
  {
    q: 'Is this the same as reverse recruiting?',
    a: 'Close. A traditional recruiter works for the employer. We work only for you, paid by you, so the only goal is getting you hired somewhere you want to be.',
  },
  {
    q: 'Who are the assistants?',
    a: 'Full-time Hirelane staff based in the US, India and the Philippines, trained on applicant tracking systems and recruiter screening. Every assistant is reviewed by an outcome manager who also sits in your chat.',
  },
  {
    q: 'Do you use AI to write my resume?',
    a: 'AI drafts the first pass of each tailored resume, then your assistant edits it against the listing and your master resume. We never add skills, titles or dates you have not confirmed.',
  },
  {
    q: 'How fast do applications go out?',
    a: 'Within 24 hours of you approving a role, and usually within 12. Listings that close early are flagged in your tracker rather than skipped silently.',
  },
  {
    q: 'What if I land a job before my applications run out?',
    a: 'Congratulations first. Unused applications are refunded pro rata, minus a one-time $75 onboarding fee that covers your setup call and master resume.',
  },
  {
    q: 'Can you guarantee I get hired?',
    a: 'No one honestly can. Interviews and the market are outside our control. What we guarantee is the volume, the tailoring and the turnaround in your plan, with proof for every application.',
  },
];
