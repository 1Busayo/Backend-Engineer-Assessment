# Backend-Engineer-Assessment

# Introduction

This document outlines the design and implementation of a minimum viable product (MVP) wallet service . The wallet service will allow users to create accounts, fund their accounts, transfer funds to other users' accounts, and withdraw funds from their accounts.


# Tech Stack

    NodeJS (LTS version)
    KnexJS ORM
    MySQL database
    Typescript (optional)

# Functionality

    User registration and account creation
    Fund account
    Transfer funds to another user's account
    Withdraw funds from account
    Faux token-based authentication

# ER Diagram

The ER diagram for the wallet service is as follows:


<img width="672" alt="image" src="https://user-images.githubusercontent.com/35940016/212577104-d361ae70-64fb-4c42-84f5-dcfee8ca3824.png">




# Design and Architecture

    The wallet service will be implemented as a NodeJS API using TypeScript
    The KnexJS ORM will be used to interact with the MySQL database
    The service will be organized into a standard MVC (model-view-controller) pattern
    A faux token-based authentication system will be used for user authentication and authorization

# Unit Testing

    Run a unit test with the command 
    `npm run test`


# Database Design Approach

    The database will be designed to store user information and account transactions
    The ER diagram will be used to guide the design of the database tables and relationships.

Conclusion

This MVP wallet service will provide the necessary functionality for the Demo Credit mobile lending app and will serve as a foundation for future development and expansion. The service will be implemented using the specified tech stack and best practices in design and architecture. Proper attention will be given to code quality, unit testing, and documentation.


