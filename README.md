# Learnings

* An html form can be sent to the browser:

```	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form')```

* The method dictates what kind of request is being made. The action dictates what url the request is sent to.

* The body of the request is made easily accessible via the body-parser package and the following line of code:

&nbsp&nbsp&nbsp&nbsp```app.use(bodyParser.urlencoded({extended: true}))```

You can then access the body via:

&nbsp&nbsp&nbsp&nbsp```req.body```