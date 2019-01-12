var express             =   require("express"),
    app                 =   express(),
    bodyParser          =   require("body-parser"),
    mongoose            =   require("mongoose"),
    methodOverride      =   require("method-override"),
    expressSanitizer    =   require("express-sanitizer");

// APP CONFIG
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
app.set("view engine", "ejs");
mongoose.set("useFindAndModify", false);

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: 
    {
        type: Date, 
        default: Date.now
        
    }
});

var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES

app.get("/", function(req, res){
    res.redirect("/blogs");
});

//============== I N D E X  R O U T E ==============//

app.get("/blogs", function(req, res){
    
    Blog.find({}, function(err, allBlogs){
       
       if(err){
           console.log("ERROR WHILE DISPLAYING ALL BLOGS: " + err);
       } else {
           res.render("index", {blogs: allBlogs});
       }
       
    });
});

//============== N E W  R O U T E ==============//

app.get("/blogs/new", function(req, res){
    res.render("new");
})

//============== C R E A T E  R O U T E ==============//

app.post("/blogs", function(req, res){
    
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    Blog.create(req.body.blog, function(err, newBlogAdded){
        
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
        
    });
});

//============== S H O W  R O U T E ==============//

app.get("/blogs/:id", function(req, res){
    
    Blog.findById(req.params.id, function(err, foundBlog){
        
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
        
    });
});

//============== E D I T  R O U T E ==============//

app.get("/blogs/:id/edit", function(req, res){
    
    Blog.findById(req.params.id, function(err, foundBlog){
        
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
        
    });
});

//============== U P D A T E  R O U T E ==============//

app.put("/blogs/:id", function(req, res){
    
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    var blogID = req.params.id;
    
    Blog.findByIdAndUpdate(blogID, req.body.blog, function(err, updatedBlog){
        
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + blogID);
        }
        
    });
});

//============== D E L E T E  R O U T E ==============//

app.delete("/blogs/:id", function(req, res){
    
   //destroy blog
   var blogID = req.params.id;
   Blog.findByIdAndRemove(blogID, function(err, updatedBlog){
       
       if(err) {
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       }
    
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The BLOGAPP SERVER HAS STARTED");
});