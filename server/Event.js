class Event{
  constructor(date, id, start, finish, location, items ){
    this.date = date;
    this.id = id;
    this.time_start = start;
    this.time_finish = finish
    this.location = location
    this.items = items
  }
  get_date(){
    return this.date;
  }
  set_date(date){
    this.date = date;
  }
  get_id(){
    return this.id;
  }
  get_start() {
    return this.time_start;
  }
  set_start(start){
    this.time_start=start;
  }
  get_finish(){
    return this.time_finish;
  }
  set_finish(finish){
    this.timefinish=finish;
  }
  get_location(){
    return this.location;
  }
  set_location(location){
    this.location=location;
  }
  get_items(){
    return this.items;
  }
  set_items(items){
    this.items = items;
  }

}
