export const interviews = [
  {
    id: "motorola-solutions-test-dev",
    company: "Motorola Solutions",
    position: "Test Developer Interview",
    date: "February 4, 2025",
    color: "#033e6e",
    textColor: "#ffffff",
    sections: [
      {
        type: "behavioral",
        title: "Behavioural",
        items: [
          "Introduce yourself and explain why you like and applied to this position?",
          "What was a time where you had to deal with an uncooperative teammate, developer?",
          "Do you have any experience testing, especially automation testing?",
          "How long of a coop are you looking for?",
          "Have you ever built a computer?",
          "Tell me about the most interesting project you worked on.",
          "Why should we pick you?",
        ],
      },
      {
        type: "technical",
        title: "Technical",
        content:
          "Shows a picture with: 2 client monitors connected to 1 server. 4 switches are connected to the server which are connected to 100 cameras. If 2 cameras on the monitor are slowing down, lower frames, how would you test this?",
        answer:
          "Instead of testing the application as a whole, separate it into smaller parts. Test the clients, then the server, then switches, and then the cameras.",
      },
    ],
  },
  {
    id: "pcl-construction",
    company: "PCL Construction",
    position: "Information Technology Student Video Interview",
    date: "February 7, 2025",
    color: "#1a3d2f",
    textColor: "#ffffff",
    sections: [
      {
        type: "general",
        title: "Questions",
        items: [
          "Order the top 3 locations of PCL Construction you wish to work at.",
          "Introduce yourself.",
          "What are your strengths and weaknesses?",
        ],
      },
    ],
  },
  {
    id: "amd-bmc-firmware-r1",
    company: "AMD",
    position: "BMC Firmware Developer Intern Interview",
    date: "October 10, 2025",
    color: "#012140",
    textColor: "#f9fafb",
    sections: [
      {
        type: "general",
        title: "Interview",
        items: [
          "Tell us about yourself",
          "What do you know about AMD",
          "Tell me about your past work experiences",
          "What are your experiences with Docker, how did you use it",
          "If you push your code to CI branch and it breaks, how would you fix it.",
        ],
      },
      {
        type: "technical",
        title: "Technical",
        content:
          "Build a Simple Test Result Analyzer — a tool to analyze test results from a CI pipeline. Write a Python function that processes test results and generates a summary report.",
        items: [
          "Why didn't you use AI to speed up your answer?",
          "What is a technical trouble you had and how did you fix it?",
          "How would this be integrated into the CI pipeline? What is the CI pipeline and how does it help?",
        ],
      },
    ],
  },
  {
    id: "lumotive-technologies-r1",
    company: "Lumotive Technologies Inc.",
    position: "Interview (Round 1)",
    date: "February 9, 2026",
    color: "#2d1b4e",
    textColor: "#ffffff",
    sections: [
      {
        type: "general",
        title: "Questions",
        items: [
          "How are you doing?",
          "What do you know about Lumotive Technologies?",
          "Learn more about you: past coop experience and school experience, mostly for how they relate to Lumotive Technologies and would help in this position.",
          "Past projects (more in depth as to how you implemented it). Mentioned zero-copy buffers, etc. How I implemented it.",
          "I did a project in C and C++, what did I like most.",
        ],
      },
    ],
  },
  {
    id: "amd-bmc-devops",
    company: "AMD",
    position: "BMC Firmware Developer - Automation Intern Interview",
    date: "February 11, 2026",
    color: "#012140",
    textColor: "#f9fafb",
    sections: [
      {
        type: "general",
        title: "Interview",
        items: [
          "How I spent the last 4 months (studying, ESP32 project, etc.)",
          "What are your experiences with Docker, how did you use it",
          "They explained a lot of the position",
        ],
      },
      {
        type: "technical",
        title: "Technical Problem (30 mins)",
        content:
          "Python Coding Question v2: Log File Analyzer. Build a tool using collections.Counter to analyze log entries.",
      },
    ],
  },
  {
    id: "lumotive-technologies-r2",
    company: "Lumotive Technologies Inc.",
    position: "Technical Interview (Round 2)",
    date: "February 11, 2026",
    color: "#2d1b4e",
    textColor: "#ffffff",
    sections: [
      {
        type: "technical",
        title: "3 Technical Questions + 1 Bonus",
        items: [
          "Looking at code and explaining: Base class with a +=1 modify, Derived class with +=10, my_var = 5. Three functions to add my_var: just int argument, pass by reference, pass by pointer. Where would the instance of the base class be? (Heap, since initialized with new)",
          "Vector: make a function to double all elements in the array.",
          "Bonus: CountSetBits (Leetcode) using bit manipulation, then asked if there's another way (dividing by 2).",
        ],
      },
    ],
  },
  {
    id: "amd-nbio-fw",
    company: "AMD",
    position: "NBIO FW Interview",
    date: "May 25, 2026",
    color: "#012140",
    textColor: "#f9fafb",
    sections: [
      {
        type: "general",
        title: "Questions",
        items: [
          "Tell me about yourself",
          "Tell me about projects and class work you've used RTOS in",
          "What is the static keyword in C?",
          "What is the inline keyword in C?",
          "What is a problem you've faced and how did you debug and solve it?",
        ],
      },
      {
        type: "technical",
        title: "Technical: Bit Extraction",
        content: "Given: 0x12345678, Mask: 0x00ff0000, Expected Output: 0x34",
        code: `unsigned int extractByte(unsigned int given, unsigned int mask) {
    unsigned int output;
    return output;
}`,
        followUp:
          "Can you make it versatile so it works no matter the mask? For example, Mask: 0x0000ff00. First, plan it out.",
      },
    ],
  },
];
