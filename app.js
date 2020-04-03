const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];
let presidents_filtered_by_party = [];
let presidents_filtered_p_t = [];
//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const party_filter_p = function(pres, party){
  pres.forEach(president => {
    if(president.party == party){
      presidents_filtered_by_party.push(president);
    }
  });
  console.log(presidents_filtered_by_party);
}
party_filter_p(presidents, "D");

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const party_term_filter = function(pres, party, term, fin_arr){
  pres.forEach(president => {
      if(president.terms == term && president.party == party){
        fin_arr.push(president);
      }
  });
  console.log(fin_arr);
}
party_term_filter(presidents, "R", 1, presidents_filtered_p_t);
//3) return only the last three presidents
const last_3 = function(pres){
    
    
    console.log(pres.slice(9,12));
}
last_3(presidents);
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
let filtered_p_t_2 = [];
party_term_filter(presidents, "D", 2, filtered_p_t_2);
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
const lbj_check = function(pres){
  pres.forEach(president => {
    if(president.name == "Lyndon Johnson" ){
      if(president.terms == 2){
        console.log("LBJ served 2 terms");
      }else{
        console.log("LBJ was one and done");
      }
    }
  });

}
lbj_check(presidents);