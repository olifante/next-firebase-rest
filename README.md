# Next Firebase REST

Simple example showing how to load data from a private Firebase database using the REST API.

In order to run this example, you will need to identify the SECRET for your firebase database and set it as an environment variable. Here's how you can pass it to `npm start`:

```sh
FIREBASE_SECRET='replace_with_your_firebase_database_secret' npm start
```

To deploy to the `zeit now` cloud, run it like this:

```sh
now --env FIREBASE_SECRET='replace_with_your_firebase_database_secret'
```

The original backend data is available there : <https://dinosaur-facts.firebaseio.com/dinosaurs.json>

Live demo available here : <https://next-firebase-rest.now.sh/>