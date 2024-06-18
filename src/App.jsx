import React from 'react';
import Card from './Component/Card/Card';


const App = () => {
  const data =[
    {
      title:"FREE",
      price:"$0/month",
      user:"Single-User",
      storage:"50GB storage",
      public:{
        title:"Unlimited Public projects",
        icon:"fa fa-check"
      },
      community:{
        title:"community access",
        icon:"fa fa-check",
      },
      private:{
        title:"Unlimited  private Project",
        icon:"fa fa-xmark",
        class:"text-muted"
      },
      support:{
        title:"Dedicated phone support",
        icon:"fa fa-xmark",
        class:"text-muted"
      },
      domain:{
        title:"Free Subdomain",
        icon:"fa fa-xmark",
        class:"text-muted"
      },
      report:{
        title:"Monthly Status Report",
        icon:"fa fa-xmark",
        class:"text-muted"
      },
    },
    {
      title:"FREE",
      price:"$9/month",
      user:"Single-User",
      storage:"50GB storage",
      public:{
        title:"Unlimited Public projects",
        icon:"fa fa-check"},
      community:{
        title:"community access",
        icon:"fa fa-check",
      },
      private:{
        title:"Unlimited  private Project",
        icon:"fa fa-check",
      },
      support:{
        title:"Dedicated phone support",
        icon:"fa fa-check",
      },
      domain:{
        title:"Free Subdomain",
        icon:"fa fa-check",
      },
      report:{
        title:"Monthly Status Report",
        icon:"fa fa-xmark",
        class:"text-muted"
      },
    },
    {
      title:"FREE",
      price:"$49/month",
      user:"Single-User",
      storage:"50GB storage",
      public:{
        title:"Unlimited Public projects",
        icon:"fa fa-check"},
      community:{
        title:"community access",
        icon:"fa fa-check",
      },
      private:{
        title:"Unlimited  private Project",
        icon:"fa fa-check",
      },
      support:{
        title:"Dedicated phone support",
        icon:"fa fa-check",
      },
      domain:{
        title:"Free Subdomain",
        icon:"fa fa-check",
      },
      report:{
        title:"Monthly Status Report",
        icon:"fa fa-check",
      },
    },
  ];

  return (
    <>
    <Card data ={data} />
    </>
  );
};

export default App;