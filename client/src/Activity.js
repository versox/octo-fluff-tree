class Activity{
  constructor(name, id, category, items,location){
    this.name = name;
    this.id = id;
    this.category = category;
    this.items = items;
    this.location = location;
  }

  get_name(){
    return this.name;
  }
  set_name(name){
    this.name = name;
  }
  get_id(){
    return this.id;
  }
  get_category(){
   return this.category;
  }
  set_category(category){
    this.category = category;
  }
  get_items(){
    return this.items;
  }
  set_items(items){
   this.items = items;
  }
  get_location() {
    return this.location;
  }
  set_location(location){
    this.location = location;
  }
}
