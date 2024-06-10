export type Answer = string | null;

export type SubmoduleQuestions = {
  [question: string]: Answer;
};

export type ModuleProgress = {
  [module: string]: {
    [submodule: string]: SubmoduleQuestions;
  };
};

export type UserProgress = {
  user_id: string;
  name: string;
  course: string;
  progress: ModuleProgress;
};

export const usersProgress: UserProgress[] = [
  {
    user_id: "U001",
    name: "Alice Smith",
    course: "Data Science Fundamentals",
    progress: {
      "Module 1: Introduction to Data Science": {
        "Submodule 1.1: Overview": {
          "What is data science?":
            "Data science is an interdisciplinary field that uses scientific methods to extract knowledge from data.",
          "When did data science emerge?": "Data science as a field emerged in the early 2000s.",
          "Is data science related to AI?": "Yes",
          "What are common tools used in data science?": "Python, R, SQL, etc.",
        },
        "Submodule 1.2: History of Data Science": {
          "Who is known as the father of data science?": "William S. Cleveland",
          "When was the term 'data science' first used?": "In 2001",
          "Is data science evolving?": "Yes",
          "Key milestones in data science?": null,
        },
        "Submodule 1.3: Key Concepts": {
          "What is machine learning?": "A subset of AI that focuses on building systems that learn from data.",
          "Difference between supervised and unsupervised learning?":
            "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data.",
          "What is a data pipeline?": "A set of processes used to move data from one system to another.",
          "What is big data?": "Large and complex data sets that traditional data processing software cannot handle.",
        },
        "Submodule 1.4: Applications": {
          "Applications of data science?": "Healthcare, finance, marketing, etc.",
          "Is data science used in healthcare?": "Yes",
          "How is data science used in marketing?": "To analyze customer behavior and optimize campaigns.",
          "Is data science useful for finance?": "Yes",
        },
      },
      "Module 2: Data Analysis": {
        "Submodule 2.1: Descriptive Statistics": {
          "What are descriptive statistics?":
            "Techniques that summarize or describe the characteristics of a data set.",
          "Examples of descriptive statistics?": "Mean, median, mode, etc.",
          "Is standard deviation a descriptive statistic?": "Yes",
          "Importance of descriptive statistics?": "Helps understand data distribution.",
        },
        "Submodule 2.2: Inferential Statistics": {
          "What is inferential statistics?":
            "Methods used to make predictions or inferences about a population based on a sample.",
          "Difference between inferential and descriptive statistics?":
            "Descriptive statistics summarize data; inferential statistics make predictions.",
          "What is a confidence interval?": "A range of values used to estimate a population parameter.",
          "Is hypothesis testing part of inferential statistics?": "Yes",
        },
        "Submodule 2.3: Data Visualization": {
          "Purpose of data visualization?": "To present data in a graphical format for easier understanding.",
          "Common data visualization tools?": "Tableau, Power BI, Matplotlib, etc.",
          "Is a bar chart a data visualization tool?": "Yes",
          "What is a scatter plot?": "A graph used to display values for two variables for a set of data.",
        },
        "Submodule 2.4: Data Cleaning": {
          "What is data cleaning?": "The process of detecting and correcting inaccurate data.",
          "Steps in data cleaning?": "Removing duplicates, handling missing values, etc.",
          "Is data cleaning important?": "Yes",
          "Tools for data cleaning?": "OpenRefine, Trifacta, etc.",
        },
      },
      "Module 3: Machine Learning": {
        "Submodule 3.1: Introduction to Machine Learning": {
          "What is machine learning?": "A method of data analysis that automates analytical model building.",
          "Types of machine learning?": "Supervised, unsupervised, and reinforcement learning.",
          "Is deep learning part of machine learning?": "Yes",
          "Applications of machine learning?": "Image recognition, speech recognition, etc.",
        },
        "Submodule 3.2: Supervised Learning": {
          "What is supervised learning?": "A type of machine learning where the model is trained on labeled data.",
          "Examples of supervised learning algorithms?": "Linear regression, decision trees, etc.",
          "Is classification supervised learning?": "Yes",
          "Difference between regression and classification?":
            "Regression predicts continuous values; classification predicts categorical values.",
        },
        "Submodule 3.3: Unsupervised Learning": {
          "What is unsupervised learning?": "A type of machine learning that deals with unlabeled data.",
          "Examples of unsupervised learning algorithms?": "K-means clustering, PCA, etc.",
          "Is clustering unsupervised learning?": "Yes",
          "Benefits of unsupervised learning?": "Identifies hidden patterns in data.",
        },
        "Submodule 3.4: Model Evaluation": {
          "What is model evaluation?": "The process of assessing the performance of a machine learning model.",
          "Common evaluation metrics?": "Accuracy, precision, recall, etc.",
          "Is cross-validation a model evaluation technique?": "Yes",
          "Importance of model evaluation?": "Ensures the model performs well on unseen data.",
        },
      },
    },
  },
  {
    user_id: "U002",
    name: "Bob Johnson",
    course: "Data Science Fundamentals",
    progress: {
      "Module 1: Introduction to Data Science": {
        "Submodule 1.1: Overview": {
          "What is data science?":
            "Data science is an interdisciplinary field that uses scientific methods to extract knowledge from data.",
          "When did data science emerge?": "Data science as a field emerged in the early 2000s.",
          "Is data science related to AI?": "Yes",
          "What are common tools used in data science?": null,
        },
        "Submodule 1.2: History of Data Science": {
          "Who is known as the father of data science?": null,
          "When was the term 'data science' first used?": "In 2001",
          "Is data science evolving?": null,
          "Key milestones in data science?": null,
        },
        "Submodule 1.3: Key Concepts": {
          "What is machine learning?": "A subset of AI that focuses on building systems that learn from data.",
          "Difference between supervised and unsupervised learning?": null,
          "What is a data pipeline?": null,
          "What is big data?": "Large and complex data sets that traditional data processing software cannot handle.",
        },
        "Submodule 1.4: Applications": {
          "Applications of data science?": null,
          "Is data science used in healthcare?": "Yes",
          "How is data science used in marketing?": null,
          "Is data science useful for finance?": null,
        },
      },
      "Module 2: Data Analysis": {
        "Submodule 2.1: Descriptive Statistics": {
          "What are descriptive statistics?":
            "Techniques that summarize or describe the characteristics of a data set.",
          "Examples of descriptive statistics?": "Mean, median, mode, etc.",
          "Is standard deviation a descriptive statistic?": null,
          "Importance of descriptive statistics?": null,
        },
        "Submodule 2.2: Inferential Statistics": {
          "What is inferential statistics?": null,
          "Difference between inferential and descriptive statistics?": null,
          "What is a confidence interval?": null,
          "Is hypothesis testing part of inferential statistics?": null,
        },
        "Submodule 2.3: Data Visualization": {
          "Purpose of data visualization?": "To present data in a graphical format for easier understanding.",
          "Common data visualization tools?": null,
          "Is a bar chart a data visualization tool?": null,
          "What is a scatter plot?": null,
        },
        "Submodule 2.4: Data Cleaning": {
          "What is data cleaning?": null,
          "Steps in data cleaning?": null,
          "Is data cleaning important?": null,
          "Tools for data cleaning?": null,
        },
      },
      "Module 3: Machine Learning": {
        "Submodule 3.1: Introduction to Machine Learning": {
          "What is machine learning?": "A method of data analysis that automates analytical model building.",
          "Types of machine learning?": null,
          "Is deep learning part of machine learning?": null,
          "Applications of machine learning?": null,
        },
        "Submodule 3.2: Supervised Learning": {
          "What is supervised learning?": null,
          "Examples of supervised learning algorithms?": null,
          "Is classification supervised learning?": null,
          "Difference between regression and classification?": null,
        },
        "Submodule 3.3: Unsupervised Learning": {
          "What is unsupervised learning?": null,
          "Examples of unsupervised learning algorithms?": null,
          "Is clustering unsupervised learning?": null,
          "Benefits of unsupervised learning?": null,
        },
        "Submodule 3.4: Model Evaluation": {
          "What is model evaluation?": null,
          "Common evaluation metrics?": null,
          "Is cross-validation a model evaluation technique?": null,
          "Importance of model evaluation?": null,
        },
      },
    },
  },
  {
    user_id: "U003",
    name: "Carol Williams",
    course: "Data Science Fundamentals",
    progress: {
      "Module 1: Introduction to Data Science": {
        "Submodule 1.1: Overview": {
          "What is data science?": null,
          "When did data science emerge?": null,
          "Is data science related to AI?": null,
          "What are common tools used in data science?": null,
        },
        "Submodule 1.2: History of Data Science": {
          "Who is known as the father of data science?": null,
          "When was the term 'data science' first used?": null,
          "Is data science evolving?": null,
          "Key milestones in data science?": null,
        },
        "Submodule 1.3: Key Concepts": {
          "What is machine learning?": null,
          "Difference between supervised and unsupervised learning?": null,
          "What is a data pipeline?": null,
          "What is big data?": null,
        },
        "Submodule 1.4: Applications": {
          "Applications of data science?": null,
          "Is data science used in healthcare?": null,
          "How is data science used in marketing?": null,
          "Is data science useful for finance?": null,
        },
      },
      "Module 2: Data Analysis": {
        "Submodule 2.1: Descriptive Statistics": {
          "What are descriptive statistics?": null,
          "Examples of descriptive statistics?": null,
          "Is standard deviation a descriptive statistic?": null,
          "Importance of descriptive statistics?": null,
        },
        "Submodule 2.2: Inferential Statistics": {
          "What is inferential statistics?": null,
          "Difference between inferential and descriptive statistics?": null,
          "What is a confidence interval?": null,
          "Is hypothesis testing part of inferential statistics?": null,
        },
        "Submodule 2.3: Data Visualization": {
          "Purpose of data visualization?": null,
          "Common data visualization tools?": null,
          "Is a bar chart a data visualization tool?": null,
          "What is a scatter plot?": null,
        },
        "Submodule 2.4: Data Cleaning": {
          "What is data cleaning?": null,
          "Steps in data cleaning?": null,
          "Is data cleaning important?": null,
          "Tools for data cleaning?": null,
        },
      },
      "Module 3: Machine Learning": {
        "Submodule 3.1: Introduction to Machine Learning": {
          "What is machine learning?": null,
          "Types of machine learning?": null,
          "Is deep learning part of machine learning?": null,
          "Applications of machine learning?": null,
        },
        "Submodule 3.2: Supervised Learning": {
          "What is supervised learning?": null,
          "Examples of supervised learning algorithms?": null,
          "Is classification supervised learning?": null,
          "Difference between regression and classification?": null,
        },
        "Submodule 3.3: Unsupervised Learning": {
          "What is unsupervised learning?": null,
          "Examples of unsupervised learning algorithms?": null,
          "Is clustering unsupervised learning?": null,
          "Benefits of unsupervised learning?": null,
        },
        "Submodule 3.4: Model Evaluation": {
          "What is model evaluation?": null,
          "Common evaluation metrics?": null,
          "Is cross-validation a model evaluation technique?": null,
          "Importance of model evaluation?": null,
        },
      },
    },
  },
];
