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
  {
    id: "tesla-swe-validation-r1",
    company: "Tesla",
    position: "Software Validation Engineer Intern Interview (Round 1)",
    date: "August 4, 2026",
    color: "#cc0000",
    textColor: "#ffffff",
    sections: [
      {
        type: "behavioral",
        title: "Behavioural",
        items: [
          "Tell me about yourself (the interviewer forgot about my interview and did not have my resume on hand)",
        ],
      },
      {
        type: "technical",
        title: "Technical: APIs & Linked Lists",
        items: [
          "Can you split up the URL by words? (The API call did not work, so we did this instead)",
          "Imagine there's a linked list, how would you find the middle node?",
          "Imagine there's a linked list where each node has another linked list of its own, how would you find the middle?",
        ],
      },
      {
        type: "technical",
        title: "Technical: Python Exercise (SWAPI)",
        content:
          "Write a Python script against the Star Wars API (https://swapi.dev/api/) with five parts: return the tallest and shortest characters, map each character to their starships, find all characters across the paginated API, explain how concurrency would speed up parts 2 and 3, and find the middle character of a character's name without using the length of the list.",
        code: `import requests
import json
import datetime

# example api call to start with
url = "https://swapi.dev/api/"
resp = requests.get(url)
resp = resp.json()
print(json.dumps(resp))


# part 1
def tallest_and_shortest():
    """
    return a dict of the tallest and shortest characters
    example output assuming Rob and Nate are the only starwars characters and Rob is tall
    {"tallest": "Rob", "shortest": "Nate"}
    """
    # TODO


print(tallest_and_shortest())


# part 2
def all_starships() -> dict:
    """
    return a dict that maps each character to the name of their starship(s)
    example output assuming Rob is the only character and he has 2 cars
    {"Rob" : ["car1", "car2"]}
    """
    # TODO


print(all_starships())


# part 3
def find_all_characters() -> list:
    """
    there's more characters in the api, find all the characters' name and return as a list
    """
    # TODO


print(find_all_characters())


# part 4
## explain how you could use concurrency to speed up part 2 & 3


# part 5
def find_middle_character() -> str:
    """
    without using the count of the characters list, find the middle of the character's name, and return as a string
    """
    # TODO


print(find_middle_character())`,
      },
    ],
  },
  {
    id: "tesla-swe-validation-r2",
    company: "Tesla",
    position: "Software Validation Engineer Intern Interview (Round 2)",
    date: "August 7, 2026",
    color: "#cc0000",
    textColor: "#ffffff",
    sections: [
      {
        type: "behavioral",
        title: "Behavioural",
        items: [
          "Tell me about your past experience",
          "Why do you think you are fit for the job?",
          "What is a time where, after validating and approving for release, you found a problem that was not caught in HIL or SIL tests?",
          "Let's say you are in the factory and the vehicles are made by applying/adding a few components at every station. How can we simulate this in a HIL or SIL environment? (Use relays)",
        ],
      },
      {
        type: "technical",
        title: "Technical: Bit Toggling",
        content:
          "Given x = 7 and i = 3, turn the ith bit from the right to 1 if it is 0 and to 0 if it is 1. (Python or C)",
        code: `x = 7
i = 3
# x = 0b0111 -> flip the 3rd bit from the right
# x = 0b1111 (15)`,
        followUp:
          "Asked to write it in either Python or C, so the solution should cover both the bitwise approach and any reasoning about the index being 1-based from the right.",
      },
    ],
  },
];
