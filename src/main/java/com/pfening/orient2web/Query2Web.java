package com.pfening.orient2web;

import com.google.gson.Gson;
import com.tinkerpop.blueprints.Vertex;
import com.tinkerpop.blueprints.impls.orient.OrientGraph;
import com.tinkerpop.blueprints.impls.orient.OrientGraphFactory;
import java.util.ArrayList;
import static spark.Spark.get;
import static spark.Spark.post;
import static spark.Spark.staticFileLocation;

public class Query2Web {
    public static void main(String[] args) throws Exception {
        
        staticFileLocation("/public");

        OrientGraphFactory factory = new OrientGraphFactory("plocal:C:/orientdb/databases/gddb", "admin", "admin");
        OrientGraph g = factory.getTx();

        Gson gson = new Gson();
        Iterable<Vertex> person = g.getVerticesOfClass("GDDB_Person");
        ArrayList<Object> props = new ArrayList<>();
        for(Vertex v:person){            
            props.add(g.getVertex(v.getId()).getProperties());      
            //System.out.println(g.getVertex(v.getId()).getProperties());
        }

        get("/users", (request, response) -> {
            response.type("application/json");          
            return gson.toJson(props);
        });
        post("/users", (request, response) -> {       
            return request;
        });
    }
}
