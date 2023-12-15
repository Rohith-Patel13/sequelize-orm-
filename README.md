<!-- This command initializes a new Node.js project by creating a package.json file with default settings. The -y flag stands for "yes," which means it accepts all the default configurations without prompting you for input. -->
```bash
npm init -y
```

<!-- This command installs the cors and express packages as dependencies for your Node.js project.
express is a popular web application framework for Node.js that simplifies the process of building web applications and APIs.
cors is a middleware for Express that enables Cross-Origin Resource Sharing, allowing your server to handle requests from different origins. -->
```bash
npm install cors express
```

<!-- you're setting up the necessary tools to work with PostgreSQL databases using Sequelize in your Node.js application. -->
```bash
npm install sequelize pg pg-hstore
```

<!-- installing sequelize-cli globally, you can use the sequelize command directly in your terminal without having to specify the path to the local installation. This makes it more convenient to run Sequelize commands from any project directory on your machine. -->
```bash
npm install -g sequelize-cli
```


<!-- This initialization step is typically one of the first steps when setting up a new Sequelize project. After running sequelize init, you can start creating models, migrations, and seeders using the Sequelize CLI commands. -->
```bash
sequelize init
```


<!-- see some commands -->
```bash
sequelize
```

<!-- After running sequelize db:create, you should see a new database created on your database server with the specified name in the configuration file. -->
```bash
sequelize db:create
```


<!-- The syntax for generating a Sequelize model -->
```bash
npx sequelize-cli model:generate --name ModelName --attributes attribute1:dataType,attribute2:dataType,...
```
<!-- example: This command generates a Sequelize model named "User" with three attributes: "firstName," "lastName," and "email," each with the specified data type (string). -->
```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```


<!-- applies any pending migrations to your database.  -->
<!-- If you have installed Sequelize globally using npm install -g sequelize-cli, you can use below command directly without the need for npx. -->
```bash
sequelize db:migrate
```

                (OR)

<!-- If you don't have Sequelize installed globally or want to use a specific version for your project, you can use below command: -->
```bash
npx sequelize-cli db:migrate
```



<!-- The syntax for generating a Sequelize migration -->
```bash
npx sequelize-cli migration:generate --name MigrationName
```
<!--example: Changes to a particular table -->
```bash
npx sequelize-cli migration:generate --name make-cols-non-nullable
```



<!-- The sequelize db:migrate:undo command is used to revert the most recent database migration. It effectively undoes the changes made by the last migration file, rolling back the database schema to the state before the last migration was applied. -->
```bash
sequelize db:migrate:undo
```

