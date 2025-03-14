<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="asp.net_web_app_demo.Home" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Prima mea aplicație ASP.NET</title>
      <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container-flex">
            <h2>Bun venit in prima mea aplicatie ASP.NET Web Forms!</h2>
            <asp:TextBox ID="txtNume" runat="server" Placeholder="Introdu numele tău"></asp:TextBox>
            <asp:Button ID="btnSalut" runat="server" Text="Salut" OnClick="btnSalut_Click" />
            <br />
            <asp:Label ID="lblMesaj" runat="server" ForeColor="Red"></asp:Label>
        </div>
    </form>
</body>
</html>
