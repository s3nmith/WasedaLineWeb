# WasedaLine Queue Tracker 🚀

Welcome to WasedaLine, a cutting-edge project developed by Waseda University students dedicated to optimizing campus life through technology. Our mission is to minimize the time students spend in queues at the cafeteria, allowing for a more efficient and predictable campus experience.

## 🎯 Introduction

**Objective:** Enhance students' time management on campus by providing real-time data on cafeteria queue lengths.

**Need:** Address the challenge of unexpectedly long queues during peak times, improving overall efficiency and predictability for students.

**System Overview:** WasedaLine is a real-time queue tracking system employing IoT technology to monitor and relay cafeteria queue lengths directly to students.

### 🛠 Project Components

1. **IoT Device:**
   - **Function:** Records a "click" with each tray pickup, indicating queue activity.
   - **Specifications:** Durable, water-resistant, ESP8266 NodeMCU for reliability and longevity.

2. **Backend System:**
   - **Function:** Processes clicks to accurately estimate queue lengths.
   - **Data Processing:** Utilizes calculations based on the number of clicks within specific time intervals (3/5 minutes) to estimate queue length.
   - **API:** A REST API facilitates real-time data transmission to the front-end application.

3. **Front-end Application:**
   - **Function:** Displays real-time queue length to students through a user-friendly interface.
   - **Features:** 
     - Real-time data display.
     - Historical data analysis to predict peak times.
     - Notifications alerting to low queue times.

### 📈 Benefits

- **Time Management:** Empowers students with the choice to visit the cafeteria at less crowded times.
- **Efficiency:** Reduces unnecessary waiting, freeing up time for study or leisure.
- **Predictability:** Historical data analysis aids in planning around peak times, particularly beneficial during exams or high-stress periods.

### 🔗 GitHub Repositories

- Main Project: [WasedaLine](https://github.com/s3nmith/WasedaLine)
- Web Interface: [WasedaLineWeb](https://github.com/s3nmith/WasedaLineWeb)


### 🤝 Contributing

We welcome contributions from fellow Waseda students. Whether it's feature suggestions, bug reports, or code contributions, your input is invaluable.

---

WasedaLine aims to enhance the campus experience by providing real-time data on campus-wide queues, allowing students to make informed decisions and manage their time effectively.

