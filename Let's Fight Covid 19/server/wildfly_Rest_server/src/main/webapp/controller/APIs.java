package com.src.main.webapp.controller;

import javax.ws.rs.*;

@Path("Let's%20Fight%20Covid%2019/pages/")
public class HelloWorld
{

    @GET
    @Path("index")
    public String advice() {
        return "Advice";
    }
    @GET
    @Path("moreInfo/{advice}")
    public String moreAdvice(@PathParam("name") final String name) {
       return name;
      }

      @PUT
      @Path("moreInfo")
    
        public medicament  getItem() {
           Item item = new Item("feizer",2500);
           return item;
        }
        @PUT
        @Path("moreInfoArray")
        public Item[]  getItem1() {
          Item item[] = new Item[2];
          item[0] = new Item("med1",2500);
          item[1] = new Item("med2",100);
        
          return item;
        }  
        @PUT
        @Path("moreInfoList")
        public List<Item> getCollItems() {
	        List list = new ArrayList();
	        Item item1 = new Item("med1",2500);
	        Item item2 = new Item("med2",100);
	        Item item3 = new Item("med3",200);

	        list.add(item1);
	        list.add(item2);
	        list.add(item3);

	        return list;
}
}