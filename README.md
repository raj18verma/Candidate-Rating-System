![jsr2](https://github.com/raj18verma/Candidate-Rating-System/blob/main/A%20modern%20and%20in%207a1eb0ba-15bf-4887-9982-744b281da50b.png)

# Candidate Rating System
This repository contains the code and instructions for identifying credible candidates seeking job openings, as presented by the recruiter. It efficiently filters out incomplete profiles or those lacking adequate skills. Users are assessed based on the color of their Profile Summary Card. A green color signifies a strong and well-rounded profile, while red or light red indicates a profile that may require improvements or corrections.

## Business Understanding
In every job hiring platform, the profile completion details column typically includes name, email address, profile pictures, social media profiles, and more. This information serves as a benchmark for distinguishing credible profiles. To accomplish this, we propose creating a profile summary card that ranges from Red (indicating a poor profile) to Green (indicating a strong profile) in color.
The feature I've submitted currently considers key fields such as name, job role, location, and their GitHub and LinkedIn IDs. However, we can enhance this by including additional essential fields such as coding profiles, certificates, and an achievements section. Furthermore, the addition of Premium Membership and participation in skill enhancement programs (by Unstop itself) could significantly boost a user's visibility.
Implementing this approach can streamline the screening process, enabling recruiters to identify top candidates based on their rating (with a higher proportion of green indicating a stronger profile). These highly rated profiles could receive perks such as direct access to HR contacts and recommendations, fostering a more efficient recruitment process.

## Data Scraping
To collect the necessary data for training our prototype, we will scrape job-related information from UNSTOP. The following columns will be extracted:

Job Title
Salary Estimate
Job Description
Rating
Company Name
Location
Headquarters
Size
Founded
Type of Ownership
Industry
Sector
Revenue
Competitors

## Feature Engineering
Once the data is collected, we will perform feature engineering to preprocess and transform the raw data into a suitable format for training our filter model. This step includes:

Handling Missing Data: Deal with missing values in the dataset by either imputing them or removing the corresponding rows/columns.
Encoding Categorical Variables: Convert categorical variables such as job title, location, industry, and sector into numerical representations using techniques like one-hot encoding or label encoding.
Feature Scaling: Normalize numerical features, such as salary estimate and company rating, to ensure they have a similar scale and prevent dominance of certain features in the model.

## Machine Learning Techniques:
To provide personalized job recommendations, we employ the TF-IDF (Term Frequency-Inverse Document Frequency) vectorization technique. The TF-IDF vectorizer from the scikit-learn library to transform job descriptions and user preferences into numerical feature vectors. These vectors capture the importance of each word in the documents, enabling the system to find similar job opportunities based on user preferences. The Nearest Neighbors algorithm is then used to identify the most relevant job recommendations.

skill extractor segment provides functions and utilities to extract skills from a PDF file using the Spacy library and perform text processing and matching operations. These extracted skills can be used for further analysis and processing in the job recommendation system.

## Streamlit Application
To make the job recommendation system easily accessible and user-friendly, we have developed a Streamlit application. Streamlit provides an intuitive web interface where users can upload their resumes. The application processes the user input, applies the machine learning models, and displays the top-recommended jobs based on the user's preferences and historical data.


## Must Go Through the Live Working Demo of this Prototype
