 function Shapes(){
   return (
      <>
         <div class="container2">
            <div class="parent1">
              <div class="child-one"></div>
            </div>

            <div class="parent2">
               <div class="child-two"></div>
             </div>

            <div class="parent3">
               <div class="child-three">
                  <svg width="210" height="210">
                     <polygon points="70,10 30,70 30,150 70,190 160,190 205,140 200,70 150,10" fill="purple" className="rotate-svg"></polygon>
                  </svg>
               </div>
            </div>

            <div class="parent4">
               <div class="child-four">
                  <svg width="200" height="220">
                     <polygon points="100,20 30,200 180,200" fill="red"></polygon>
                  </svg>
               </div>
            </div>
         </div>
      </>
   );
}

export default Shapes;