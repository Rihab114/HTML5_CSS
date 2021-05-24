package com.src.main.webapp.controller;


import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class Item {
	public Item() { 	}

	public Item(String description, int price) { 
            this.description = description;
            this.price = price;
	}
 
	private String description;
	private int price;

        // Getter- Setter methods

}