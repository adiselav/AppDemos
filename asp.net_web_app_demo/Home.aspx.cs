﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace asp.net_web_app_demo
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSalut_Click(object sender, EventArgs e)
        {
            lblMesaj.Text = "Salut, " + txtNume.Text + "!";
        }
    }
}