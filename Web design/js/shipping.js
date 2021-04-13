

function billingFunction()
{
  
   if(document.getElementById('same').checked) 
    {
      document.getElementById("billingName").setAttribute("value",document.getElementById("shippingName").value); 
      document.getElementById("billingZip").setAttribute("value",document.getElementById("shippingZip").value); 
       
    }

   else
    {
      document.getElementById("billingName").removeAttribute("value");
      document.getElementById("billingZip").removeAttribute("value");
      
    }
  
}