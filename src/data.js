export const tickets = [
  {
    id: "1",
    subject: "Cannot reset password",
    status: "open",
    priority: "high",
    customer: "Sarah Mitchell",
    createdAt: "2025-04-22",
    description:
      "Customer reports that the password reset email is never arriving. She has checked spam folders and tried multiple times over the past 3 days. Account is linked to a corporate email domain that may have strict filtering.",
    activity: [
      {
        timestamp: "2025-04-22 09:15",
        author: "Sarah Mitchell",
        message: "Submitted ticket via support form.",
      },
      {
        timestamp: "2025-04-22 11:30",
        author: "James Owens",
        message:
          "Checked mail server logs. No bounce-back detected. Escalating to email infrastructure team.",
      },
      {
        timestamp: "2025-04-23 08:45",
        author: "James Owens",
        message:
          "Confirmed the corporate domain is silently dropping our emails. Reached out to their IT admin.",
      },
    ],
  },
  {
    id: "2",
    subject: "Billing charged twice for March",
    status: "in-progress",
    priority: "high",
    customer: "David Park",
    createdAt: "2025-04-20",
    description:
      "Customer was charged $49.99 twice on March 28. Bank statement shows two identical transactions. Customer is requesting an immediate refund for the duplicate charge.",
    activity: [
      {
        timestamp: "2025-04-20 14:00",
        author: "David Park",
        message: "Submitted ticket with screenshot of bank statement attached.",
      },
      {
        timestamp: "2025-04-20 15:20",
        author: "Lisa Tran",
        message:
          "Verified duplicate charge in Stripe dashboard. Initiated refund for the second transaction.",
      },
      {
        timestamp: "2025-04-21 09:00",
        author: "Lisa Tran",
        message:
          "Refund processed. Typically takes 5-10 business days to appear. Notified customer.",
      },
      {
        timestamp: "2025-04-25 10:30",
        author: "David Park",
        message: "Refund received. Thank you for the quick resolution.",
      },
    ],
  },
  {
    id: "3",
    subject: "Dashboard loading extremely slowly",
    status: "open",
    priority: "medium",
    customer: "Elena Kowalski",
    createdAt: "2025-04-25",
    description:
      "The main dashboard takes over 30 seconds to load. This started happening after the last update on April 24. Other pages seem to load at normal speed. Customer is on Chrome 124, Windows 11.",
    activity: [
      {
        timestamp: "2025-04-25 16:45",
        author: "Elena Kowalski",
        message: "Reported slow dashboard. Attached browser console logs.",
      },
      {
        timestamp: "2025-04-26 09:00",
        author: "Marcus Webb",
        message:
          "Reproduced the issue. Appears to be related to the new analytics widget making too many API calls on mount. Investigating.",
      },
      {
        timestamp: "2025-04-26 14:15",
        author: "Marcus Webb",
        message:
          "Root cause identified: the analytics query is missing pagination and pulling the entire dataset. Fix in progress.",
      },
    ],
  },
  {
    id: "4",
    subject: "Feature request: dark mode",
    status: "closed",
    priority: "low",
    customer: "Tom Nguyen",
    createdAt: "2025-04-10",
    description:
      "Customer would like a dark mode option for the application. Says they work late hours and the bright interface causes eye strain. Several other users on the community forum have requested this as well.",
    activity: [
      {
        timestamp: "2025-04-10 11:00",
        author: "Tom Nguyen",
        message: "Submitted feature request for dark mode support.",
      },
      {
        timestamp: "2025-04-11 10:00",
        author: "Amy Chen",
        message:
          "Added to product backlog. This is a frequently requested feature. Targeting Q3 roadmap.",
      },
      {
        timestamp: "2025-04-18 16:00",
        author: "Amy Chen",
        message:
          "Dark mode has been approved for the Q3 release cycle. Closing ticket and linking to roadmap item.",
      },
    ],
  },
  {
    id: "5",
    subject: "Cannot upload files larger than 5MB",
    status: "in-progress",
    priority: "medium",
    customer: "Rachel Adams",
    createdAt: "2025-04-23",
    description:
      "Customer needs to upload project files that are 10-15MB but the system rejects anything over 5MB with a generic error message. Their plan should support up to 50MB uploads according to the pricing page.",
    activity: [
      {
        timestamp: "2025-04-23 13:30",
        author: "Rachel Adams",
        message:
          "Reported upload limit issue. Attached screenshot of error message.",
      },
      {
        timestamp: "2025-04-23 14:45",
        author: "Marcus Webb",
        message:
          "Checked account settings. Customer is on the Pro plan which allows 50MB. The upload service config has a hardcoded 5MB limit that was never updated when we changed plans.",
      },
      {
        timestamp: "2025-04-24 11:00",
        author: "Marcus Webb",
        message:
          "Deployed config fix to staging. Awaiting QA verification before pushing to production.",
      },
    ],
  },
  {
    id: "6",
    subject: "API rate limit errors in production",
    status: "open",
    priority: "high",
    customer: "Kevin Zhang",
    createdAt: "2025-04-27",
    description:
      "Customer's production application is hitting 429 rate limit errors during peak hours (2-4 PM EST). They are on the Business plan with 10,000 requests/minute but their monitoring shows they peak around 8,000. Suspects the limit is not being applied correctly.",
    activity: [
      {
        timestamp: "2025-04-27 15:00",
        author: "Kevin Zhang",
        message:
          "Reported rate limiting issue. Included Datadog dashboard screenshots showing request volumes.",
      },
      {
        timestamp: "2025-04-27 16:30",
        author: "James Owens",
        message:
          "Reviewing API gateway logs. It appears the rate limiter is counting websocket heartbeats as API requests, which would explain the discrepancy.",
      },
    ],
  },
];
