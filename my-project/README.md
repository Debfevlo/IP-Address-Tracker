# Frontend Mentor - IP address tracker solution

![Desktop View](images/desktop-design.jpg)
![Mobile view](images/mobile-design.jpg)


# Welcome 👋

Thanks for checking out this frontend coding challenge.


This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# The Challenge

Your challenge is to build out this IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations, you'll be using the IP Geolocation API by IPify. To generate the map, we recommend using LeafletJS.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

See their own IP Address on the map on the initial page load
Search for any IP addresses or domains and see the key information and location
View the optimal layout for each page depending on their device's screen size
See hover states for all interactive elements on the page

# Links
This is the link to the  [IP-Address-Tracker-LINK](https://debbie-ip-address-tracker.netlify.app/)

# My Process

1. **Understanding the project**
I wanted to build a tool that allows users to track IP addresses and see detailed information like location, timezone, and ISP. Before starting, I explored similar apps to understand what features are most useful and how to design a clean, user-friendly interface.

2. **Setting Up the Project**
I set up the project using Vite + React for a fast and modern development environment.
I installed Tailwind CSS for styling, which allowed me to quickly create a responsive and visually appealing layout.
The project structure was organized with separate components, assets, and pages for clarity and maintainability.

3. **Designing the UI**
- I designed the interface to be minimalistic and responsive:

- Desktop and mobile layouts were carefully planned.

- Tailwind CSS was used to implement spacing, typography, and background images.

- The design focused on readability, clean UI, and user-friendly interaction.

4. **Implementing Functionality**
I created a SearchBar component for users to enter IP addresses.
The app integrates the IP Geolocation API to fetch data about each IP address.
Results are displayed dynamically, including location, timezone, ISP, and a map view showing the IP’s location.

5. **Ensuring Responsiveness**
Using Tailwind’s responsive utilities (md:, lg:), I made sure the app looks great on all screen sizes.
I tested the layout on mobile and desktop devices to ensure all elements, including background images, scaled correctly.

6. **Testing & Deployment**
I tested multiple IP addresses to confirm the API returned accurate data and the UI updated correctly.
After confirming everything worked locally, I deployed the project to Netlify:
https://debbie-ip-address-tracker.netlify.app/

I also verified that all images and background assets appeared correctly in the deployed version.


7. **Key Learnings**
- Gained experience working with APIs in React and handling dynamic data.

- Strengthened understanding of Tailwind CSS for responsive and modern UI design.

- Learned best practices for project structure and component organization.

- Improved skills in deploying projects to Netlify and troubleshooting deployment issues.


## Built with
- React – Frontend JavaScript library for building user interfaces

- Tailwind CSS – Utility-first CSS framework for styling and responsiveness

- Vite – Fast development build tool

- IP Geolocation API – To fetch IP address location, timezone, and ISP data

- Leaflet.js – For displaying interactive maps

- Netlify – Deployment and hosting of the live project


## Author

