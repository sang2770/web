
      let myChart = document.getElementById('myChart').getContext('2d');
      let massPopChart = new Chart(myChart, {
           type:'doughnut',
           data:{
           labels:['HieuNang','Tong'],
           datasets:[{
              labels:'HieuQua',
              data:[
              60,
              300,
              
              ],
              backgroundColor:[
              '#F60C0C'
              ],

             
            }]
           },
           options:{
            title:{
              display:false,
              text:'Cong Suat Phuc Vu',

            },
            legend:{
              display:false,
              position:'right',
            },
            tooltips:{
              enabled:false,
            }  
   
           },
      });
       let chartt = document.getElementById('chartt').getContext('2d');
let PopChart = new Chart(chartt, {
           type:'bar',
           data:{
           labels:['Tổng Doanh Thu','Chi phí','Tổng lợi nhuận'],
           datasets:[{
              labels:'Doanh thu, chi phi, loi nhuan',
              data:[
              46983450,
              14234560,
              32748890,

              
              ],
              backgroundColor:[
              'rgba(255, 99, 132, 0.6',
              'rgba(54, 162, 235, 0.6',
              'rgba(255, 286, 86, 0.6',
              'rgba(255, 99, 132, 0.6'
              ],
              hoverBackgroundColor:[
               'rgba(255, 99, 132, 0.6',
              'rgba(54, 162, 235, 0.6',
              'rgba(255, 286, 86, 0.6',
              'rgba(255, 99, 132, 0.6'
              ],
              
             
            }]
           },
           options:{
            title:{
              display:true,
              text:'Doanh thu, chi phí, lợi nhuận',
              fontSize:25
            },
            legend:{
              display:false,
              position:'top',
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });
let charttt = document.getElementById('charttt').getContext('2d');
let PopChartt = new Chart(charttt, {
           type:'bar',
           data:{
           labels:['01/11/2020',' 02/11/2020', '03/11/2020','01/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020','09/11/2020', '10/11/2020',' 11/11/2020', '12/11/2020',' 13/11/2020', '14/11/2020', '15/11/2020',' 16/11/2020','17/11/2020','18/11/2020',' 19/11/2020',' 20/11/2020',' 21/11/2020',' 22/11/2020', ' 23/11/2020',' 24/11/2020',' 25/11/2020',' 26/11/2020',' 27/11/2020',' 28/11/2020',' 29/11/2020',' 30/11/2020'],
           datasets:[{
              labels:[],        
                            data:[
              4698345,
              1423456,
              3274889,
              3034252,
              5467357,
              3254562,
              3645466,
              4565464,
              1324654,
              4562521,
              2436247,
              2346456,
              4375456,
              3457547,
              4235757,
              3465467,
              3457488,
              3475658,
              2346549,
              3445736,
              3489698,
              5434098,
              3466546,
              4574687,
              5478768,
              3457587,
              4537687,
              5474898,
              3465786,
              4356878,
              2767878
              
              ],
              backgroundColor:
              'rgba(46, 119, 220, 1)',
          
              hoverBackgroundColor:
              'rgba(46, 119, 220, 1)',
              
               
             
            }]
           },
           options:{
            title:{
              display:true,
              text:'Doanh thu theo ngày',
              fontSize:25
            },
            legend:{
              display:false,
              position:'top',
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });
let chartttt = document.getElementById('chartttt').getContext('2d');
let PopCharttt = new Chart(chartttt, {
           type:'line',
           data:{
           labels:['7h','8h', '9h','10h','11h', '12h', '13h', '14h', '15h', '16h','17h', '18h',' 19h', '20h',' 21h','22h', '23h','0h','1h','2h',' 3h','4h','5h','6h'],
           datasets:[{
              labels:['Số khách'],        
                            data:[
              0,
              0,
              0,
              12,
              30,
              20,
              40,
              36,
              50,
              35,
              40,
              24,
              54,
              37,
              47,
              35,
              40,
              15,
               9,
               5,
               0,
               0,
               0,
               0,
               0
              
              
              ],
              backgroundColor:
              'rgba(255, 255, 255, 1)',
              borderColor:'rgba(46, 119, 220, 1)',
              borderWidth:1,
              pointRadius:5,    
              fill:false,
          
             
              
               
             
            }]
           },
           options:{
            title:{
              display:true,
              text:'Doanh thu theo giờ',
              fontSize:25
            },
            legend:{
              display:false,
              position:'top',
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });
   
   
   
let chart1 = document.getElementById('chart1').getContext('2d');
let tPopChart = new Chart(chart1, {
           type:'bar',
           data:{
           labels:['Sushi cá hồi',' Akashi 500ml', 'Sushi lươn nướng','Cá ngừ', 'Bạch tuộc', '7-up', 'Ba chỉ lợn xiên nướng', 'Cá hồi', 'Sushi cá trích','Cá hồi nướng muối'],
           datasets:[{
              labels:'Doanh thu theo mặt hàng',
              data:[
               7321876,
              4234562,
              3274889,
              3034252,
              2467357,
              2254562,
              1545466,
              1365464,
              952464,
              456221
              ],
              backgroundColor:
             'rgba(54, 162, 235, 0.6',
              
              
              hoverBackgroundColor:
              'rgba(54, 162, 235, 0.6',
              
              
              
             
            }]
           },
           options:{
            title:{
              display:true,
              text:['Doanh thu theo mặt hàng'],
              
              fontSize:20,
            },
            legend:{
              display:false,
              position:['top'],
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });
let chart2 = document.getElementById('chart2').getContext('2d');
let tPopChartt = new Chart(chart2, {
           type:'bar',
           data:{
           labels:[ '7-up', 'Sushi cá hồi',' Cocacola', 'Sushi lươn nướng','Ba chỉ lợn xiên nướng','Bánh xèo nhật', 'Sushi cá trích','Bạch tuộc', 'Khăn lạnh', 'Râu mực tẩm bột chiên'],
           datasets:[{
              labels:'Doanh thu theo mặt hàng',
              data:[
               110,
              104,
              56,
              30,
              24,
              22,
              15,
              13,
              9,
              4
              ],
              backgroundColor:
             'rgba(54, 162, 235, 0.6',
              
              
              hoverBackgroundColor:
              'rgba(54, 162, 235, 0.6',
              
              
              
             
            }]
           },
           options:{
            title:{
              display:true,
              text:['Doanh thu theo mặt hàng'],
             
              fontSize:20,
            },
            legend:{
              display:false,
              position:['right'],
            },
            tooltips:{
              enabled:false,
            }  
   
           },
      });
let chart3 = document.getElementById('chart3').getContext('2d');
let tPopCharttt = new Chart(chart3, {
           type:'pie',
           data:{
           labels:[ '7-up',' Akashi 500ml', 'Bạch tuộc','Cá ngừ','Sushi cá hồi', 'Sushi lươn nướng','Khác'],
           datasets:[{
              labels:['7-up',' Akashi 500ml', 'Bạch tuộc','Cá ngừ','Sushi cá hồi', 'Sushi lươn nướng','Khác'],
              data:[
               6,
              17,
              6,
              6,
              27,
              9,
              29
              ],
              backgroundColor:[
             'rgba(255, 138, 138, 1)',
             'rgba(70, 227, 138, 1)',
             'rgba(70, 135, 255, 1)',
             ' rgba(230, 161, 0, 1)',
             'rgba(137, 64, 164, 1)',
             'rgba(137, 148, 164, 1)',
             'rgba(194, 205, 173, 1)'
             ],
              
              
              hoverBackgroundColor:[
              'rgba(255, 138, 138, 1)',
              'rgba(70, 227, 138, 1)',
              'rgba(70, 135, 255, 1)',
             ' rgba(230, 161, 0, 1)',
             'rgba(137, 64, 164, 1)',
             'rgba(137, 148, 164, 1)',
             'rgba(194, 205, 173, 1)'
            ],
              
              
              
             
            }]
           },
           options:{
            title:{
              display:true,
              text:['Tỉ trọng doanh thu theo mặt hàng'],
             
              fontSize:20,
            },
            legend:{
              display:true,
              position:'right',
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });
let chart4 = document.getElementById('chart4').getContext('2d');
let tPopChartttt = new Chart(chart4, {
           type:'doughnut',
           data:{
           labels:[ 'Tại nhà hàng',' Mang về', 'Giao hàng'],
           datasets:[{
              labels:['Tại nhà hàng',' Mang về', 'Giao hàng'],
              data:[
               88,
               3,
               9,

              ],
              backgroundColor:[
             'rgba(255, 138, 138, 1)',
             'rgba(70, 227, 138, 1)',
             'rgba(70, 135, 255, 1)',
             
             ],
              
              
              hoverBackgroundColor:[
              'rgba(255, 138, 138, 1)',
              'rgba(70, 227, 138, 1)',
              'rgba(70, 135, 255, 1)',
             
            ],
              
              
              
             
            }]
           },
           options:{
            title:{
              display:true,
              text:['Tỉ trọng doanh thu theo hình thức phục vụ'],
             
              fontSize:20,
            },
            legend:{
              display:true,
              position:'right',
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });
let chart5 = document.getElementById('chart5').getContext('2d');
let ttPopChart = new Chart(chart5, {
           type:'line',
           data:{
           labels:['01/11/2020',' 02/11/2020', '03/11/2020','01/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020','09/11/2020', '10/11/2020',' 11/11/2020', '12/11/2020',' 13/11/2020', '14/11/2020', '15/11/2020',' 16/11/2020','17/11/2020','18/11/2020',' 19/11/2020',' 20/11/2020',' 21/11/2020',' 22/11/2020', ' 23/11/2020',' 24/11/2020',' 25/11/2020',' 26/11/2020',' 27/11/2020',' 28/11/2020',' 29/11/2020',' 30/11/2020'],
           datasets:[{
              labels:[],        
                            data:[
              2598345,
              2423456,
              2274889,
              2504252,
              2067357,
              2654562,
              2845466,
              2565464,
              2324654,
              2562521,
              2036247,
              2346456,
              2475456,
              2457547,
              2395757,
              2465467,
              1857488,
              2475658,
              2346549,
              2445736,
              2489698,
              1934098,
              2466546,
              2574687,
              1878768,
              2457587,
              2537687,
              2474898,
              2465786,
              2356878,
              1867878
              
              ],
               backgroundColor:
              'rgba(255, 255, 255, 1)',
              borderColor:'rgba(46, 119, 220, 1)',
              borderWidth:1,
              pointRadius:5,    
              fill:false,
               
             
            }]
           },
           options:{
            title:{
              display:true,
              text:'Doanh thu mặt hàng theo ngày',
              fontSize:25
            },
            legend:{
              display:false,
              position:'top',
            },
            tooltips:{
              enabled:true,
            }  
   
           },
      });