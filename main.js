var data = new Date(); 
var ano = data.getFullYear();
document.getElementById("data").innerHTML = ano;

var rel = [0.025, 0.050, 0.075, 0.100, 0.125, 0.150, 0.175, 0.200, 0.225, 0.250, 0.275, 0.300, 0.325, 0.350, 0.375, 0.400, 0.425, 0.450, 0.475, 0.500, 0.525, 0.550, 0.575, 0.600, 0.625, 0.650, 0.675, 0.700, 0.725, 0.750, 0.775, 0.800, 0.825, 0.850, 0.875, 0.900, 0.925, 0.950, 0.975, 1.000];
var z100 = [[1.08, 1.69, 2.2, 2.64, 3.04, 3.4, 3.73, 4.04, 4.34, 4.61, 4.95, 5.11, 5.33, 5.54, 5.74, 5.94, 6.11, 6.29, 6.43, 6.58, 6.74, 6.88, 6.91, 7.05, 7.14, 7.23, 7.3, 7.37, 7.42, 7.46, 7.48, 7.5, 7.5, 7.48, 7.44, 7.41, 7.32, 7.2, 7.04, 6.58], [0.0001, 0.0002, 0.0006, 0.0011, 0.0017, 0.0025, 0.0034, 0.0045, 0.0057, 0.0071, 0.0089, 0.0101, 0.012, 0.0136, 0.0144, 0.0174, 0.0194, 0.0216, 0.0237, 0.0258, 0.0282, 0.0304, 0.0322, 0.0347, 0.0369, 0.0391, 0.0412, 0.0433, 0.0452, 0.0471, 0.0489, 0.0505, 0.052, 0.0532, 0.0543, 0.0551, 0.0555, 0.056, 0.0549, 0.0516]];
var z150 = [[1.41, 2.21, 2.88, 3.46, 3.98, 4.45, 4.89, 5.3, 5.68, 6.04, 6.37, 6.69, 6.98, 7.26, 7.53, 7.77, 8, 8.22, 8.43, 8.62, 8.79, 8.95, 9.1, 9.24, 9.36, 9.47, 9.57, 9.65, 9.71, 9.77, 9.8, 9.82, 9.82, 9.8, 9.76, 9.69, 9.58, 9.43, 9.21, 8.62], [0.0002, 0.0007, 0.0017, 0.0032, 0.0051, 0.0074, 0.0102, 0.0133, 0.0169, 0.0209, 0.0252, 0.0298, 0.0348, 0.04, 0.0456, 0.0513, 0.0573, 0.0634, 0.0697, 0.0761, 0.0826, 0.0982, 0.0957, 0.1023, 0.1088, 0.1152, 0.1214, 0.1275, 0.1333, 0.1388, 0.144, 0.1488, 0.1531, 0.1569, 0.16, 0.1623, 0.1636, 0.1636, 0.1616, 0.1522]];
var z200 = [[1.7, 2.68, 3.48, 4.19, 4.82, 5.39, 5.93, 6.42, 6.88, 7.31, 7.72, 8.1, 8.46, 8.8, 9.12, 9.42, 9.7, 9.96, 10.21, 10.44, 10.65, 10.85, 11.03, 11.19, 11.34, 11.47, 11.59, 11.69, 11.77, 11.83, 11.87, 11.9, 11.9, 11.87, 11.82, 11.73, 11.61, 11.43, 11.16, 10.44], [0.0004, 0.0016, 0.0037, 0.0068, 0.0109, 0.0159, 0.0219, 0.0287, 0.0364, 0.0449, 0.0542, 0.0642, 0.0749, 0.0862, 0.0981, 0.1105, 0.1233, 0.1366, 0.1501, 0.1639, 0.1779, 0.192, 0.2062, 0.2203, 0.2343, 0.248, 0.2615, 0.2745, 0.2871, 0.299, 0.3102, 0.3205, 0.3298, 0.3379, 0.3445, 0.3495, 0.3523, 0.3523, 0.3481, 0.3279]];
var z250 = [[1.98, 3.11, 4.04, 4.86, 5.59, 6.26, 6.88, 7.45, 7.98, 8.49, 8.96, 9.4, 9.82, 10.21, 10.58, 10.93, 11.25, 11.56, 11.84, 12.11, 12.36, 12.59, 12.8, 12.99, 13.16, 13.41, 13.45, 13.56, 13.66, 13.73, 13.78, 13.8, 13.8, 13.78, 13.71, 13.62, 13.47, 13.26, 12.94, 12.11], [0.0006, 0.0029, 0.0068, 0.0124, 0.0198, 0.0289, 0.0397, 0.0521, 0.066, 0.0814, 0.0953, 0.1164, 0.1358, 0.1563, 0.1779, 0.2003, 0.2236, 0.2476, 0.2722, 0.2972, 0.3226, 0.3482, 0.3738, 0.3994, 0.4247, 0.4497, 0.4741, 0.4977, 0.5205, 0.5421, 0.5624, 0.5811, 0.5979, 0.6126, 0.6247, 0.6336, 0.6387, 0.6388, 0.6312, 0.5945]];
var z300 = [[2.23, 3.51, 4.57, 5.49, 6.31, 7.07, 7.76, 8.41, 9.02, 9.59, 10.11, 10.61, 11.09, 11.53, 11.95, 12.34, 12.71, 13.05, 13.38, 13.68, 13.96, 14.21, 14.45, 14.67, 14.86, 15.03, 15.19, 15.31, 15.42, 15.5, 15.56, 15.59, 15.59, 15.56, 15.49, 15.38, 15.21, 14.98, 14.62, 13.68], [0.001, 0.0046, 0.011, 0.0202, 0.0322, 0.047, 0.0645, 0.0847, 0.1073, 0.1324, 0.1598, 0.1893, 0.2208, 0.2542, 0.2892, 0.3258, 0.3636, 0.4027, 0.4426, 0.4834, 0.5246, 0.5662, 0.6079, 0.6495, 0.6907, 0.7312, 0.7709, 0.8094, 0.8464, 0.8815, 0.9145, 0.9449, 0.9723, 0.9961, 1.0158, 1.0303, 1.0386, 1.0388, 1.0264, 0.9667]];
var z375 = [[2.59, 4.08, 5.3, 6.37, 7.33, 8.2, 9.01, 9.76, 10.46, 11.12, 11.74, 12.32, 12.86, 13.38, 13.86, 14.32, 14.74, 15.15, 15.52, 15.87, 16.19, 16.49, 16.77, 17.02, 17.24, 17.45, 17.62, 17.77, 17.89, 17.99, 18.05, 18.09, 18.09, 18.05, 17.97, 17.84, 17.65, 17.38, 16.96, 15.87], [0.0019, 0.0084, 0.0199, 0.0366, 0.0584, 0.0852, 0.117, 0.1535, 0.1946, 0.2401, 0.2897, 0.3432, 0.4004, 0.4609, 0.5244, 0.5907, 0.6593, 0.7301, 0.8026, 0.8764, 0.9512, 1.0266, 1.1022, 1.776, 1.2523, 1.3258, 1.3977, 1.4675, 1.5346, 1.5983, 1.6581, 1.7133, 1.7629, 1.8061, 1.8417, 1.8681, 1.8832, 1.8834, 1.861, 1.7528]];
var z400 = [[2.7, 4.26, 5.53, 6.65, 7.65, 8.56, 9.41, 10.19, 10.92, 11.61, 12.25, 12.86, 13.43, 13.97, 14.47, 14.95, 15.39, 15.81, 16.2, 16.57, 16.91, 17.22, 17.51, 17.77, 18, 18.21, 18.4, 18.55, 18.68, 18.78, 18.85, 18.88, 18.88, 18.84, 18.76, 18.63, 18.43, 18.14, 17.71, 16.57], [0.0023, 0.01, 0.0237, 0.0435, 0.0693, 0.1012, 0.1389, 0.1823, 0.2312, 0.2852, 0.3441, 0.4077, 0.4756, 0.5474, 0.6229, 0.7116, 0.7832, 0.8672, 0.9533, 1.041, 1.1298, 1.2194, 1.3092, 1.3987, 1.4874, 1.5748, 1.6602, 1.7431, 1.8227, 1.8985, 1.9695, 2.035, 2.094, 2.1453, 2.1876, 2.2189, 2.2368, 2.2371, 2.2105, 2.0819]];
var z450 = [[2.92, 4.6, 5.98, 7.19, 8.27, 9.26, 10.17, 11.02, 11.81, 12.56, 13.25, 13.91, 14.53, 15.11, 15.65, 16.17, 16.65, 17.1, 17.53, 17.92, 18.29, 18.63, 18.94, 19.22, 19.47, 19.7, 19.9, 20.07, 20.21, 20.31, 20.39, 20.43, 20.43, 20.38, 20.29, 20.15, 19.93, 19.62, 19.15, 17.92], [0.0031, 0.0137, 0.0324, 0.0595, 0.0949, 0.1385, 0.1902, 0.2496, 0.3165, 0.3904, 0.4711, 0.5582, 0.6511, 0.7494, 0.8527, 0.9605, 1.0722, 1.1872, 1.305, 1.4251, 1.5468, 1.6694, 1.7923, 1.9149, 2.0363, 2.1559, 2.2729, 2.3863, 2.4954, 2.599, 2.6963, 2.786, 2.8667, 2.937, 2.9948, 3.0377, 3.0623, 3.0626, 3.0262, 2.8502]];
var z500 = [[3.14, 4.94, 6.42, 7.71, 8.87, 9.94, 10.91, 11.82, 12.67, 13.47, 14.22, 14.92, 15.58, 16.21, 16.79, 17.34, 17.86, 18.35, 18.8, 19.23, 19.62, 19.98, 20.31, 20.62, 20.89, 21.13, 21.35, 21.53, 21.68, 21.79, 21.87, 21.91, 21.91, 21.87, 21.77, 21.61, 21.38, 21.05, 20.55, 19.23], [0.0041, 0.0181, 0.0429, 0.0788, 0.1257, 0.1835, 0.2519, 0.3306, 0.4191, 0.5171, 0.624, 0.7392, 0.8623, 0.9926, 1.1294, 1.2721, 1.42, 1.5723, 1.7284, 1.8874, 2.0485, 2.211, 2.3738, 2.5361, 2.6969, 2.8553, 3.0102, 3.1604, 3.3048, 3.4422, 3.571, 3.6898, 3.7967, 3.8897, 3.9663, 4.0232, 4.0557, 4.0561, 4.0079, 3.7748]];
var z600 = [[3.54, 5.58, 7.25, 8.71, 10.02, 11.22, 12.33, 13.35, 14.31, 15.21, 16.06, 16.85, 17.6, 18.3, 18.96, 19.59, 20.17, 20.72, 21.23, 21.71, 22.15, 22.56, 22.94, 23.28, 23.59, 23.87, 24.11, 24.31, 24.48, 24.61, 24.7, 24.74, 24.74, 24.69, 24.58, 24.41, 24.15, 23.77, 23.2, 21.71], [0.0067, 0.0295, 0.0698, 0.1282, 0.2044, 0.2984, 0.4096, 0.5375, 0.6815, 0.8408, 1.0146, 1.2021, 1.4022, 1.614, 1.83695, 2.0685, 2.309, 2.5568, 2.8106, 3.0691, 3.3312, 3.5953, 3.86, 4.1239, 4.3655, 4.643, 4.8949, 5.1393, 5.374, 5.5974, 5.8068, 6, 6.1738, 6.3251, 6.4497, 6.5422, 6.595, 6.5957, 6.5172, 6.1383]];
var z700 = [[3.92, 6.18, 8.03, 9.65, 11.11, 12.43, 13.66, 14.8, 15.86, 16.86, 17.79, 18.67, 19.5, 20.28, 21.02, 21.71, 22.35, 22.96, 23.53, 24.06, 24.55, 25.01, 25.42, 25.8, 26.14, 26.45, 26.71, 26.94, 27.13, 27.27, 27.37, 27.42, 27.42, 27.37, 27.25, 27.05, 26.76, 26.34, 25.72, 14.06], [0.0101, 0.0445, 0.1053, 0.1933, 0.3084, 0.4501, 0.6179, 0.8108, 1.028, 1.2683, 1.5305, 1.8132, 2.1151, 2.4346, 2.7702, 3.1202, 3.483, 3.8567, 4.2395, 4.6296, 5.0248, 5.4232, 5.8225, 6.2207, 6.6152, 7.0037, 7.38, 7.7521, 8.1064, 8.4432, 8.7592, 9.0505, 9.3128, 9.541, 9.7289, 9.8684, 9.984, 9.9491, 9.8308, 9.2591]];
var z800 = [[4.29, 6.76, 8.78, 10.55, 12.14, 13.59, 14.93, 16.18, 17.34, 18.43, 19.45, 20.41, 21.32, 22.17, 22.97, 23.73, 24.44, 25.1, 25.72, 26.3, 26.84, 27.33, 27.79, 28.2, 28.58, 28.91, 29.2, 29.45, 29.65, 29.81, 29.92, 29.97, 29.98, 29.91, 29.78, 29.57, 29.25, 28.8, 28.11, 26.3], [0.0144, 0.0635, 0.1504, 0.276, 0.4402, 0.6426, 0.8821, 1.5777, 1.4676, 1.8108, 2.1851, 2.5888, 3.0198, 3.4759, 3.9551, 4.4548, 4.9728, 5.5063, 6.0529, 6.6098, 7.1741, 7.7428, 8.313, 8.8814, 9.4447, 9.9994, 10.542, 11.068, 11.574, 12.055, 12.508, 12.922, 13.296, 13.622, 13.89, 10.089, 14.203, 14.205, 14.036, 13.22]];
var z900 = [[4.64, 7.31, 9.5, 11.41, 13.13, 14.7, 16.15, 17.5, 18.75, 19.93, 21.04, 22.06, 23.06, 23.98, 24.85, 25.66, 26.43, 27.15, 27.82, 28.45, 29.03, 29.57, 30.06, 30.51, 30.91, 31.27, 31.59, 31.86, 32.07, 32.24, 32.36, 32.42, 32.42, 32.36, 32.22, 31.98, 31.64, 31.15, 30.41, 28.45], [0.0197, 0.0869, 0.2059, 0.3778, 0.6027, 0.8797, 1.2076, 1.5848, 2.0094, 2.2471, 2.9915, 3.5441, 4.1341, 4.7586, 5.4145, 6.0687, 6.8077, 7.5382, 8.2865, 9.0488, 9.8214, 10.6, 11.381, 12.159, 12.93, 13.689, 14.432, 15.152, 15.844, 16.503, 17.12, 17.69, 18.203, 18.649, 10.016, 19.288, 19.444, 19.446, 19.215, 18.098]];
var z1000 = [[4.98, 7.84, 10.19, 12.24, 14.09, 15.77, 17.33, 18.77, 20.12, 21.38, 22.57, 23.69, 24.74, 25.73, 26.66, 27.53, 28.35, 29.13, 29.85, 30.52, 31.14, 31.72, 32.25, 32.72, 33.16, 33.55, 33.89, 34.17, 34.41, 34.59, 34.72, 34.78, 34.78, 34.71, 34.56, 34.31, 33.94, 33.42, 32.62, 30.52], [0.026, 0.1151, 0.2727, 0.5004, 0.7982, 1.1651, 1.5994, 2.099, 2.6612, 3.2833, 3.9619, 4.6938, 5.4752, 6.3023, 7.171, 8.0771, 9.0162, 9.9836, 10.975, 11.984, 13.007, 14.039, 15.072, 16.103, 17.124, 18.13, 19.113, 20.067, 20.984, 21.856, 22.674, 23.429, 24.108, 24.698, 25.185, 25.546, 25.752, 25.755, 25.44, 23.969]];

var arr_b = [[0.025, 0.050, 0.075, 0.100, 0.125, 0.150, 0.175, 0.200, 0.225, 0.250, 0.300, 0.350, 0.400, 0.450, 0.500, 0.550, 0.600, 0.650, 0.700, 0.750, 0.775, 0.800, 0.825, 0.850, 0.875, 0.900, 0.925, 0.950, 0.975, 1.000], [0.016, 0.033, 0.048, 0.064, 0.079, 0.093, 0.107, 0.121, 0.134, 0.147, 0.171, 0.194, 0.215, 0.234, 0.250, 0.265, 0.278, 0.2888, 0.297, 0.302, 0.304, 0.304, 0.304, 0.304, 0.301, 0.299, 0.294, 0.287, 0.277, 0.250]];

if ((localStorage.getItem("id")) == null || JSON.parse(localStorage.getItem("users")) == null)
{
    window.location.href = "menu.html";
}
else
{
    var id = localStorage.getItem("id");
    var users = JSON.parse(localStorage.getItem("users"));
}

var main = users[id].main;
var extra = users[id].extra;
var obs = users[id].obs;

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('tbl_exporttable_to_xls');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
        XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}

function export_pdf()
{
    myTable = document.getElementsByTagName("table")[0];

    myTable.id = "my-table";

    window.jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF('l', 'pt');
    doc.autoTable({ html: '#my-table' })
    doc.save('Dimensionamento.pdf')
}

var last;
var existe;
var is_main;
function tabela1()
{
    var x = eval(`z${arguments[1]}`);
    var y = arguments[0];
    var z = [];
    
    for (var j = 0; j < x[1].length; j++)
    {
        if (y < x[1][j])
        {
            z.push(x[1][j]);
            z.push(x[0][j]);
            z.push(rel[j]);
            break;
        }
    }
    return z;
}

function tabela2()
{
    for (var j = 0; j < arr_b[0].length; j++)
    {
        if (arguments[0] <= arr_b[0][j])
        {
            var z = arr_b[1][j];
            break;
        }
    }
    return z;
}

function verify_foz()
{
    for (var i = 0; i < extra.length; i++)
    {
        var x = extra[i];

        last = true;
        for (var j = 0; j < extra.length; j++)
        {
            var y = extra[j];

            if (y.nome.substring(0, y.nome.indexOf(".")) == x.nome.substring(0, x.nome.indexOf(".")))
            {
                if (y.nome.substring((y.nome.indexOf(".") + 1), y.nome.length) == parseInt(x.nome.substring((x.nome.indexOf(".") + 1), x.nome.length)) + 1)
                {
                    last = false;
                    break;
                }
            }
        }
        if (last == false)
        {
            extra[i].foz = y.nome;
        }
        else
        {
            if (x.foz != "0")
            {
                existe = false;
                for (var j = 0; j < main.length; j++)
                {
                    var y = main[j];

                    if (x.foz == y.nome)
                    {
                        existe = true;
                        break;
                    }
                }

                if (existe == false)
                {
                    extra[i].foz = "0";
                }
            }
        }
    }
    for (var i = 0; i < main.length; i++)
    {
        var x = main[i];

        last = true;
        for (var j = 0; j < main.length; j++)
        {
            var y = main[j];

            if (y.nome.substring((y.nome.indexOf(".") + 1), y.nome.length) == parseInt(x.nome.substring((x.nome.indexOf(".") + 1), x.nome.length)) + 1)
            {
                last = false;
                break;
            } 
        }

        if (last == false)
        {
            main[i].foz = y.nome;
        }
        else
        {
            main[i].foz = "0";
        }
    }
}

function ct()
{
    for (var i = 0; i < main.length; i++)
    {
        if (main[i].nome.substring((main[i].nome.indexOf(".") + 1), main[i].nome.length) != 1)
        {
            for (var j = 0; j < main.length; j++)
            {
                if (main[j].foz == main[i].nome)
                {
                    main[i].ctm = main[j].ctj;
                    break;
                }
            }
        }
    }
    for (var i = 0; i < extra.length; i++)
    {
        last = true;
        for (var j = 0; j < extra.length; j++)
        {
            if (extra[j].nome.substring(0, extra[j].nome.indexOf(".")) == extra[i].nome.substring(0, extra[i].nome.indexOf(".")))
            {
                if (extra[j].nome.substring((extra[j].nome.indexOf(".") + 1), extra[j].nome.length) == parseInt(extra[i].nome.substring((extra[i].nome.indexOf(".") + 1), extra[i].nome.length)) + 1)
                {
                    extra[j].ctm = extra[i].ctj;
                    last == false;
                    break;
                }
            }
        }
        if (last == true)
        {
            if (extra[i].foz != 0)
            {
                if (extra[i].foz.substring(0, extra[i].foz.indexOf(".")) == 1)
                {
                    for (var j = 0; j < main.length; j++)
                    {
                        if (main[j].nome == extra[i].foz)
                        {
                            extra[i].ctj = main[j].ctm;
                            break;
                        }
                    }
                }
                else
                {
                    for (var j = 0; j < extra.length; j++)
                    {
                        if (extra[j].nome == extra[i].foz)
                        {
                            extra[i].ctj = extra[j].ctm;
                            break;
                        }
                    }
                }
            }
        }
    }
}

function compare()
{
    var valid_obs = true;
    for (var i = 0; i < obs[obs.length - 1].length; i++)
    {
        if (arguments[0] == obs[obs.length - 1][i])
        {
            valid_obs = false;
        }
    }
    if (valid_obs == true)
    {
        obs[obs.length - 1].push(arguments[0]);
    }
}


var last_index = 0.5;

function reload()
{
    var a = 2;
    var b = 1;
    var maior;
    for (var i = 0; i < extra.length; i++)
    {
        is_main = false;
        var a1;
        var a2;
        
        existe = false;
        while (existe == false)
        {
            for (var k = 0; k < extra.length; k++)
            {
                a1 = extra[k].nome.substring(0, extra[k].nome.indexOf("."));
                a2 = extra[k].nome.substring((extra[k].nome.indexOf(".") + 1), extra[k].nome.length);
                
                if (a1 == a)
                {
                    if (a2 == b)
                    {
                        
                        existe = true;
                        break;
                    }
                }
            }
            if (existe == false)
            {
                a++;
                b = 1;
            }
            
        }
        b++;

        extra[k].qmoni = 0;
        extra[k].qmonf = 0;

        for (var j = 0; j < extra.length; j++)
        {
            var y = extra[j];

            if (extra[j].foz == extra[k].nome)
            {
                extra[k].qmoni += extra[j].qjusi;
                extra[k].qmonf += extra[j].qjusf;
            }
        }

        extra[k].qtreci = extra[k].l * users[id].tci;  
        extra[k].qtrecf = extra[k].l * users[id].tcf; 

        extra[k].qjusi = extra[k].qmoni + extra[k].qtreci;
        extra[k].qjusf = extra[k].qmonf + extra[k].qtrecf;

        if (extra[k].qjusi < 1.5)
        {
            extra[k].qproji = 1.5;
        }
        else
        {
            extra[k].qproji = extra[k].qjusi;
        }

        if (extra[k].qjusf < 1.5)
        {
            extra[k].qprojf = 1.5;
        }
        else
        {
            extra[k].qprojf = extra[k].qjusf;
        }


        extra[k].it = (extra[k].ctm - extra[k].ctj) / extra[k].l;

        extra[k].im = 0.0055 * (extra[k].qproji ** -0.47);

        if (extra[k].ip === "0" || extra[k].ip < extra[k].im)
        {
            extra[k].ip = extra[k].im;
        }
        
        extra[k].calci = (extra[k].qproji / 1000) / (extra[k].ip ** 0.5);
        extra[k].calcf = (extra[k].qprojf / 1000) / (extra[k].ip ** 0.5);


        var z = tabela1(extra[k].calci, extra[k].d);
        if (z.length == 3)
        {
            extra[k].adoti = z[0];
            extra[k].veloci = z[1];
            extra[k].ydi = z[2];
        }
        else
        {
            obs.push(`<li>O diametro: ${extra[k].d} do trecho: ${extra[k].nome} e invalido</li>`);
            alert("Valor Invalido");
            edit(extra[k].nome);
        }


        z = tabela1(extra[k].calcf, extra[k].d);
        if (z.length == 3)
        {
            extra[k].adotf = z[0];
            extra[k].velocf = z[1];
            extra[k].ydf = z[2];
        }
        else
        {
            obs.push(`<li>O diametro: ${extra[k].d} do trecho: ${extra[k].nome} e invalido</li>`);
            alert("Valor Invalido");
            edit(extra[k].nome);
        }

        extra[k].vmsi = extra[k].veloci * (extra[k].ip ** 0.5);
        extra[k].vmsf = extra[k].velocf * (extra[k].ip ** 0.5);

        extra[k].bi = tabela2(extra[k].ydi);
        extra[k].bf = tabela2(extra[k].ydf);

        extra[k].rhi = extra[k].bi * (extra[k].d / 1000);
        extra[k].rhf = extra[k].bf * (extra[k].d / 1000);

        extra[k].vci = 6 * ((9.81 * extra[k].rhi) ** 0.5)
        extra[k].vcf = 6 * ((9.81 * extra[k].rhf) ** 0.5)

        extra[k].ttki = 1000 * extra[k].rhi * extra[k].ip;
        extra[k].ttkf = 1000 * extra[k].rhf * extra[k].ip;

        extra[k].ttpi = extra[k].ttki * 10;
        extra[k].ttpf = extra[k].ttkf * 10;


        if (extra[k].nome.substring((extra[k].nome.indexOf(".") + 1), extra[k].nome.length) == 1)
        {
            extra[k].pcm = (extra[k].d / 1000) + extra[k].rcm;
            extra[k].ccm = extra[k].ctm - extra[k].pcm;
        }
        else
        {
            for (var j = 0; j < extra.length; j++)
            {
                if (extra[j].foz == extra[k].nome)
                {
                    if (j == 0)
                    {
                        maior = [extra[j].ccj, extra[j].pcj, extra[j].rcj];
                    }
                    if (extra[j].pcj > maior[1])
                    {
                        maior = [extra[j].ccj, extra[j].pcj, extra[j].rcj];
                    }
                }
            }

            extra[k].ccm = maior[0];
            extra[k].pcm = maior[1];
            extra[k].rcm = maior[2];
        }


        extra[k].ccj = extra[k].ccm - (extra[k].ip * extra[k].l);
        extra[k].pcj = extra[k].ctj - extra[k].ccj;
        extra[k].rcj = extra[k].pcj - (extra[k].d / 1000);
        maior = [extra[k].ccj, extra[k].pcj, extra[k].rcj];
        
        var maior_p = null;

        if (!(extra[k].nome.substring((extra[k].nome.indexOf(".") + 1), extra[k].nome.length) == 1))
        {
            for (var p = 0; p < 2; p++)
            {
                if (p == 0)
                {
                    for (var j = 0; j < extra.length; j++)
                    {
                        if (extra[j].foz == extra[k].nome)
                        {
                            if (maior_p == null)
                            {
                                maior_p = extra[j].pcj;
                            }
                            else
                            {
                                if (maior_p < extra[j].pcj)
                                {
                                    maior_p = extra[j].pcj;
                                }
                            }
                        }
                    }
                }
                else
                {
                    for (var j = 0; j < extra.length; j++)
                    {
                        if (extra[j].foz == extra[k].nome)
                        {
                            extra[j].ps = maior_p;
                        }
                    }
                }
            }

        }
        
        if (extra[k].foz == 0)
        {
            extra[k].ps = extra[k].pcj;
        }


        if (extra[k].ydi > 0.75)
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} o Y/D = ${extra[k].ydi} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        else if (extra[k].ydi > 0.75)
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} o Y/D = ${extra[k].ydf} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        
        if (extra[k].ttpi < 1)
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} a Tensao Trativa = ${extra[k].ttpi} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        if (extra[k].ttpf < 1)
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} a Tensao Trativa = ${extra[k].ttpf} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        if ((extra[k].vmsi > extra[k].vci) && (extra[k].ydi > 0.5))
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} a Velocidade final = ${extra[k].vmsi} foi maior que a Velocidade critica = ${extra[k].vci} e o Y/D = ${extra[k].ydi} foi maior que 0,50. Não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        if ((extra[k].vmsf > extra[k].vcf) && (extra[k].ydf > 0.5))
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} a Velocidade final = ${extra[k].vmsf} foi maior que a Velocidade critica = ${extra[k].vcf} e o Y/D = ${extra[k].ydf} foi maior que 0,50. Não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        if (extra[k].rcm < 0.9)
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} o Recobrimento = ${extra[k].rcm.toFixed(2)} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        if (extra[k].rcj < 0.9)
        {
            compare(`<li>No trecho ${extra[k].nome} com D = ${extra[k].d} e Ip = ${extra[k].ip.toFixed(4)} o Recobrimento = ${extra[k].rcj.toFixed(2)} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        last_index = k;
    }

    last_index = 0.5;

    var name_ph;
    
    for (var i = 0; i < main.length; i++)
    {
        is_main = true;
        name_ph = "1.";
        
        name_ph += `${i + 1}`;
        for (var k = 0; k < main.length; k++)
        {
            if (main[k].nome == name_ph)
            {
                break;
            }
        }

        main[k].qmoni = 0;
        main[k].qmonf = 0;

        for (var j = 0; j < main.length; j++)
        {
            var y = main[j];

            if (main[j].foz == main[i].nome)
            {
                main[k].qmoni += main[j].qjusi;
                main[k].qmonf += main[j].qjusf;
            }
        }

        for (var j = 0; j < extra.length; j++)
        {
            var y = extra[j];

            if (extra[j].foz == main[k].nome)
            {
                main[k].qmoni += extra[j].qjusi;
                main[k].qmonf += extra[j].qjusf;
            }
        }

        main[k].qtreci = main[k].l * users[id].tci;  
        main[k].qtrecf = main[k].l * users[id].tcf;  

        main[k].qjusi = main[k].qmoni + main[k].qtreci;
        main[k].qjusf = main[k].qmonf + main[k].qtrecf;

        if (main[k].qjusi < 1.5)
        {
            main[k].qproji = 1.5;
        }
        else
        {
            main[k].qproji = main[k].qjusi;
        }

        if (main[k].qjusf < 1.5)
        {
            main[k].qprojf = 1.5;
        }
        else
        {
            main[k].qprojf = main[k].qjusf;
        }


        main[k].it = (main[k].ctm - main[k].ctj) / main[k].l;

        main[k].im = 0.0055 * (main[k].qproji ** -0.47);
        
        if (main[k].ip === "0" || main[k].ip < main[k].im)
        {
            main[k].ip = main[k].im;
        }

        main[k].calci = (main[k].qproji / 1000) / (main[k].ip ** 0.5);
        
        main[k].calcf = (main[k].qprojf / 1000) / (main[k].ip ** 0.5);
        

        var z = tabela1(main[k].calci, main[k].d);
        if (z.length == 3)
        {
            main[k].adoti = z[0];
            main[k].veloci = z[1];
            main[k].ydi = z[2];
        }
        else
        {
            obs.push(`<li>O diametro: ${main[k].d} do trecho: ${main[k].nome} e invalido</li>`);
            
            alert("Valor Invalido");
            edit(main[k].nome);
        }
        


        z = tabela1(main[k].calcf, main[k].d);
        if (z.length == 3)
        {
            
            main[k].adotf = z[0];
            main[k].velocf = z[1];
            main[k].ydf = z[2];
        }
        else
        {
            obs.push(`<li>O diametro: ${main[k].d} do trecho: ${main[k].nome} e invalido</li>`);
            
            alert("Valor Invalido");
            edit(main[k].nome);
        }
        


        main[k].vmsi = main[k].veloci * (main[k].ip ** 0.5);
        main[k].vmsf = main[k].velocf * (main[k].ip ** 0.5);

        main[k].bi = tabela2(main[k].ydi);
        main[k].bf = tabela2(main[k].ydf);

        main[k].rhi = main[k].bi * (main[k].d / 1000);
        main[k].rhf = main[k].bf * (main[k].d / 1000);

        main[k].vci = 6 * ((9.81 * main[k].rhi) ** 0.5);
        main[k].vcf = 6 * ((9.81 * main[k].rhf) ** 0.5);

        main[k].ttki = 1000 * main[k].rhi * main[k].ip;
        main[k].ttkf = 1000 * main[k].rhf * main[k].ip;

        main[k].ttpi = main[k].ttki * 10;
        main[k].ttpf = main[k].ttkf * 10;

        

        if (main[k].nome.substring((main[k].nome.indexOf(".") + 1), main[k].nome.length) == 1)
        {
            main[k].pcm = (main[k].d / 1000) + main[k].rcm;
            main[k].ccm = main[k].ctm - main[k].pcm;
        }
        else
        {
            for (var j = 0; j < extra.length; j++)
            {
                if (extra[j].foz == main[k].nome)
                {
                    if (extra[j].pcj > maior[1])
                    {
                        maior = [extra[j].ccj, extra[j].pcj, extra[j].rcj];
                    }
                }
            }

            main[k].ccm = maior[0];
            main[k].pcm = maior[1];
            main[k].rcm = maior[2];
            
        }


        main[k].ccj = main[k].ccm - (main[k].ip * main[k].l);
        main[k].pcj = main[k].ctj - main[k].ccj;
        main[k].rcj = main[k].pcj - (main[k].d / 1000);
        maior = [main[k].ccj, main[k].pcj, main[k].rcj];
        
        var maior_p = null;

        if (!(main[k].nome.substring((main[k].nome.indexOf(".") + 1), main[k].nome.length) == 1))
        {
            for (var p = 0; p < 2; p++)
            {
                if (p == 0)
                {
                    for (var j = 0; j < extra.length; j++)
                    {
                        if (extra[j].foz == main[k].nome)
                        {
                            if (maior_p == null)
                            {
                                maior_p = extra[j].pcj;
                            }
                            else
                            {
                                if (maior_p < extra[j].pcj)
                                {
                                    maior_p = extra[j].pcj;
                                }
                            }
                        }
                    }
                    for (var j = 0; j < main.length; j++)
                    {
                        if (main[j].foz == main[k].nome)
                        {
                            if (maior_p == null)
                            {
                                maior_p = main[j].pcj;
                            }
                            else
                            {
                                if (maior_p < main[j].pcj)
                                {
                                    maior_p = main[j].pcj;
                                }
                            }
                        }
                    }
                    
                }
                else
                {
                    for (var j = 0; j < extra.length; j++)
                    {
                        if (extra[j].foz == main[k].nome)
                        {
                            extra[j].ps = maior_p;
                        }
                    }
                    for (var j = 0; j < main.length; j++)
                    {
                        if (main[j].foz == main[k].nome)
                        {
                            main[j].ps = maior_p;
                        }
                    }
                }
            }

        }
        
        if (main[k].foz == 0)
        {
            main[k].ps = main[k].pcj;
        }
        
        if (main[k].ydi > 0.75)
        {
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} o Y/D = ${main[k].ydi} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        if (main[k].ydf > 0.75)
        {
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} o Y/D = ${main[k].ydf} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        if (main[k].ttpi < 1)
        {
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} a Tensao Trativa = ${main[k].ttpi} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        if (main[k].ttpf < 1)
        {
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} a Tensao Trativa = ${main[k].ttpf} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        if ((main[k].vmsi > main[k].vci) && (main[k].ydi > 0.5))
        {
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} a Velocidade final = ${main[k].vmsi} foi maior que a Velocidade critica = ${main[k].vci} e o Y/D = ${main[k].ydi} foi maior que 0,50. Não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }
        if ((main[k].vmsf > main[k].vcf) && (main[k].ydf > 0.5))
        {
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} a Velocidade final = ${main[k].vmsf} foi maior que a Velocidade critica = ${main[k].vcf} e o Y/D = ${main[k].ydf} foi maior que 0,50. Não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        if (main[k].rcm < 0.9)
        {
            
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} o Recobrimento = ${main[k].rcm.toFixed(2)} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);

        }
        if (main[k].rcj < 0.9)
        {
            
            compare(`<li>No trecho ${main[k].nome} com D = ${main[k].d} e Ip = ${main[k].ip.toFixed(4)} o Recobrimento = ${main[k].rcj.toFixed(2)} não atende à norma. <br> Mudar diametro e ou declividade.</li>`);
        }

        last_index = k;
    }
}


verify_foz();
ct();
reload();

window.localStorage.setItem('users', JSON.stringify(users));


var load_table = "";

var table = document.getElementById("table");


for (var i = 0; i < main.length; i++)
{
    var name_ph = "1.";
    name_ph += `${i + 1}`;
    for (var k = 0; k < main.length; k++)
    {
        if (main[k].nome == name_ph)
        {
            break;
        }
    }
    
    load_table += `<tr style="height: 5vh;"><th rowspan="2">${main[k].nome}</th><th rowspan="2">${main[k].l}</th><td>${users[id].tci.toFixed(4)}</td><td>${main[k].qmoni.toFixed(2)}</td><td>${main[k].qtreci.toFixed(2)}</td><td>${main[k].qjusi.toFixed(2)}</td><td>${main[k].qproji.toFixed(2)}</td><th rowspan="2">${main[k].d}</th><th rowspan="2">${main[k].it.toFixed(4)}</th><th rowspan="2">${main[k].im.toFixed(4)}</th><th rowspan="2">${main[k].ip.toFixed(4)}</th><td>${main[k].calci.toFixed(4)}</td><td>${main[k].adoti.toFixed(4)}</td><td>${main[k].veloci.toFixed(2)}</td><td>${main[k].ydi.toFixed(3)}</td><td>${main[k].vmsi.toFixed(2)}</td><td>${main[k].bi.toFixed(3)}</td><td>${main[k].rhi.toFixed(3)}</td><td>${main[k].vci.toFixed(2)}</td><td>${main[k].ttki.toFixed(3)}</td><td>${main[k].ttpi.toFixed(2)}</td><td>${main[k].ctm.toFixed(2)}</td><td>${main[k].ccm.toFixed(2)}</td><td>${main[k].pcm.toFixed(2)}</td><td>${main[k].rcm.toFixed(2)}</td><th rowspan="2">${main[k].ps.toFixed(2)}</th><th rowspan="2"><button onclick="edit(${main[k].nome})" class="et_but">Editar Trecho</button></th></tr><tr style="height: 5vh;"><td>${users[id].tcf.toFixed(4)}</td><td>${main[k].qmonf.toFixed(2)}</td><td>${main[k].qtrecf.toFixed(2)}</td><td>${main[k].qjusf.toFixed(2)}</td><td>${main[k].qprojf.toFixed(2)}</td><td>${main[k].calcf.toFixed(4)}</td><td>${main[k].adotf.toFixed(4)}</td><td>${main[k].velocf.toFixed(2)}</td><td>${main[k].ydf.toFixed(3)}</td><td>${main[k].vmsf.toFixed(2)}</td><td>${main[k].bf.toFixed(3)}</td><td>${main[k].rhf.toFixed(3)}</td><td>${main[k].vcf.toFixed(2)}</td><td>${main[k].ttkf.toFixed(3)}</td><td>${main[k].ttpf.toFixed(2)}</td><td>${main[k].ctj.toFixed(2)}</td><td>${main[k].ccj.toFixed(2)}</td><td>${main[k].pcj.toFixed(2)}</td><td>${main[k].rcj.toFixed(2)}</td></tr>`
}
var a = 2;
var b = 1;
for (var i = 0; i < extra.length; i++)
{
    var a1;
    var a2;
        
    existe = false;
    while (existe == false)
    {
        for (var k = 0; k < extra.length; k++)
        {
            a1 = extra[k].nome.substring(0, extra[k].nome.indexOf("."));
            a2 = extra[k].nome.substring((extra[k].nome.indexOf(".") + 1), extra[k].nome.length);

            if (a1 == a)
            {
                if (a2 == b)
                {
                    existe = true;
                    break;
                }
            }
        }
        if (existe == false)
        {
            a++;
            b = 1;
        }
    }
    b++;
    load_table += `<tr style="height: 5vh;"><th rowspan="2">${extra[k].nome}</th><th rowspan="2">${extra[k].l}</th><td>${users[id].tci.toFixed(4)}</td><td>${extra[k].qmoni.toFixed(2)}</td><td>${extra[k].qtreci.toFixed(2)}</td><td>${extra[k].qjusi.toFixed(2)}</td><td>${extra[k].qproji.toFixed(2)}</td><th rowspan="2">${extra[k].d}</th><th rowspan="2">${extra[k].it.toFixed(4)}</th><th rowspan="2">${extra[k].im.toFixed(4)}</th><th rowspan="2">${extra[k].ip.toFixed(4)}</th><td>${extra[k].calci.toFixed(4)}</td><td>${extra[k].adoti.toFixed(4)}</td><td>${extra[k].veloci.toFixed(2)}</td><td>${extra[k].ydi.toFixed(3)}</td><td>${extra[k].vmsi.toFixed(2)}</td><td>${extra[k].bi.toFixed(3)}</td><td>${extra[k].rhi.toFixed(3)}</td><td>${extra[k].vci.toFixed(2)}</td><td>${extra[k].ttki.toFixed(3)}</td><td>${extra[k].ttpi.toFixed(2)}</td><td>${extra[k].ctm.toFixed(2)}</td><td>${extra[k].ccm.toFixed(2)}</td><td>${extra[k].pcm.toFixed(2)}</td><td>${extra[k].rcm.toFixed(2)}</td><th rowspan="2">${extra[k].ps.toFixed(2)}</th><th rowspan="2"><button onclick="edit(${extra[k].nome})" class="et_but">Editar Trecho</button></th></tr><tr style="height: 5vh;"><td>${users[id].tcf.toFixed(4)}</td><td>${extra[k].qmonf.toFixed(2)}</td><td>${extra[k].qtrecf.toFixed(2)}</td><td>${extra[k].qjusf.toFixed(2)}</td><td>${extra[k].qprojf.toFixed(2)}</td><td>${extra[k].calcf.toFixed(4)}</td><td>${extra[k].adotf.toFixed(4)}</td><td>${extra[k].velocf.toFixed(2)}</td><td>${extra[k].ydf.toFixed(3)}</td><td>${extra[k].vmsf.toFixed(2)}</td><td>${extra[k].bf.toFixed(3)}</td><td>${extra[k].rhf.toFixed(3)}</td><td>${extra[k].vcf.toFixed(2)}</td><td>${extra[k].ttkf.toFixed(3)}</td><td>${extra[k].ttpf.toFixed(2)}</td><td>${extra[k].ctj.toFixed(2)}</td><td>${extra[k].ccj.toFixed(2)}</td><td>${extra[k].pcj.toFixed(2)}</td><td>${extra[k].rcj.toFixed(2)}</td></tr>`
}

table.innerHTML = load_table;


function load_ops()
{
    var load_selector = "";

    var selector = document.getElementById("selector");

    for (var i = 0; i < obs.length; i++)
    {
        load_selector += `<option value = 'op${i}'>${i + 1}º Versao</option>`;
    }
    load_selector += `<option value = 'op_new'>Nova Versao</option>`;
    selector.innerHTML = load_selector;
}


load_ops();


function show_obs()
{
    var x = document.getElementById("selector").value;
    
    if (x == "op_new")
    {
        obs.push([]);
        window.localStorage.setItem('users', JSON.stringify(users));
        x = obs.length - 1;
        load_ops();
        document.getElementById("selector").value = `op${x}`;
    }
    else
    {
        x = parseInt(x.substring(2, x.length));
    }

    

    var load_list = "";

    var list = document.getElementById("list");

    if (obs[x].length > 0)
    {
        for (var i = 0; i < obs[x].length; i++)
        {
            load_list += obs[x][i];
        }
    }
    else
    {
        load_list = "Vazio";
    }

    list.innerHTML = load_list;

}

show_obs();

if (localStorage.getItem("trechos") !== null)
{
    trechos = JSON.parse(localStorage.getItem("trechos"));
}
else
{
    trechos = [];
}

function edit()
{
    window.sessionStorage.setItem('edit', arguments[0]);
    window.location.href = "editar_trecho.html";
}

function add_trecho()
{
    if (users[id].tci == 0 || users[id].tcf == 0)
    {
        alert("Insira as informacoes acerca da vazao antes de continuar");
    }
    else
    {
        window.sessionStorage.setItem('edit', "0");
        window.location.href = "editar_trecho.html";
    }
}