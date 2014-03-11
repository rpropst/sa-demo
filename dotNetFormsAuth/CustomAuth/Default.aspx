<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CustomAuth.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Forms Authentication - Default Page</title>
</head>

<body>
    <h3>Using Forms Authentication</h3>
    <asp:Label ID="Welcome" runat="server" />
    <form id="form1" runat="server">
        <asp:Button ID="Submit1" runat="server" OnClick="Submit1_Click" text="Sign Out"/>
    </form>
</body>
</html>
